
function positionAndSize() {

    var logo = d3.selectAll(".logo")

    // Set view box for logo
    logo.attr('viewBox', function() {
        var dimensions = this.getBBox()
        return '0 0 ' + dimensions.width + ' ' + dimensions.height
    })

    var logoBackground = d3.select('#logoBackground'),
        backgroundDimensions = logoBackground.node().getBBox(),
        backgroundRatio = backgroundDimensions.height / backgroundDimensions.width,
        backgroundWidth = window.innerWidth/2,
        backgroundHeight = backgroundRatio * (backgroundWidth)

    logoBackground.attr('width', backgroundWidth)
        .attr('height', backgroundHeight)
        .attr('x', window.innerWidth/2 - backgroundWidth/2)
        .attr('y', window.innerHeight/2 - backgroundHeight/2)

    var logoForefront = d3.select('#logoForefront'),
        forefrontDimensions = logoForefront.node().getBBox(),
        forefrontWidthOffset = backgroundDimensions.width - forefrontDimensions.width,
        forefrontHeightOffset = backgroundDimensions.height - forefrontDimensions.height,
        forefrontRatio = forefrontDimensions.height / forefrontDimensions.width,
        forefrontWidth = window.innerWidth/2 - forefrontWidthOffset,
        forefrontHeight = forefrontRatio * (forefrontWidth)
    
    logoForefront.attr('width', forefrontWidth)
        .attr('height', forefrontHeight)
        .attr('x', window.innerWidth/2 - logoForefront.attr('width')/2)
        .attr('y', window.innerHeight/2 - logoForefront.attr('height')/2)

    var bottomBlob = d3.select('#botBlob'),
        topBlob = d3.select('#topBlob')
        
    bottomBlob.attr('transform', function() {
        var dimensions = this.getBBox(),
            scaleWidthRatio = backgroundWidth / dimensions.width
            xPosDifference = ((window.innerWidth/2 - backgroundWidth/2) - dimensions.x)/scaleWidthRatio,
            yPosDistance = window.innerHeight - dimensions.y - (dimensions.height/1.5)

        return 'scale(' + scaleWidthRatio + ',1) ' +
            'translate(' + xPosDifference + ',' + yPosDistance + ')'
    })

    topBlob.attr('transform', function() {
        var dimensions = this.getBBox(),
            scaleWidthRatio = backgroundWidth / dimensions.width
            xPosDifference = ((window.innerWidth/2 - backgroundWidth/2) - dimensions.x)/scaleWidthRatio,
            yPosDistance = 0 - dimensions.y - (dimensions.height/3)

        return 'scale(' + scaleWidthRatio + ',1) ' +
            'translate(' + xPosDifference + ',' + yPosDistance + ')'
    })
}
if (d3.select(".logo").size() >= 1) {
    window.addEventListener('resize', positionAndSize)
    positionAndSize()
}

function initializeBlobs() {
    // Depending on some number specified... copy paths of existing blobs and duplicate them
    var blobsContainer = d3.select('#blobs'),
        blobTemplates = blobsContainer.selectAll('path'),
        blobMultiplier = 10

    blobTemplates.each(function duplicate() {
        var currentBlob = d3.select(this),
            path = currentBlob.attr('d'),
            style = currentBlob.attr('style')

        for(var dup = 1; dup < blobMultiplier; dup++) {
            blobsContainer
                .append('path')
                .attr('d', path)
                .attr('style', style)
        }
    })
}

function moveBlobs() {

    function blobInitialPosition() {
        var midpoint = window.innerWidth/2, deviation = midpoint/2,
            xPos = d3.randomUniform(midpoint - deviation, midpoint + deviation)(),
            dimensions = this.getBBox(),
            topOrBottom = Math.random() >= 0.5,
            topPos = -1 * dimensions.height,
            bottomPos = window.innerHeight + dimensions.height

        return 'translate(' + xPos + ',' + (topOrBottom ? topPos : bottomPos) + ')'
    }

    function blobTransform() {
        var currentValue = d3.select(this).attr('transform'),
            xTranslate = parseInt(currentValue.slice(currentValue.indexOf('(') + 1, currentValue.indexOf(','))),
            yTranslate = parseInt(currentValue.slice(currentValue.indexOf(',') + 1, currentValue.indexOf(')'))),
            dimensions = this.getBBox(),
            xPos = dimensions.x + xTranslate, yPos = dimensions.y + yTranslate,
            newYPos = yPos >= 0 ? (0 - dimensions.height) : (window.innerHeight + dimensions.height)
        
        return 'translate(' + xPos + ',' + newYPos + ')'
    }

    var allBlobs = d3.select('#blobs').selectAll('path')
    allBlobs.interrupt() // disable any pending transitions
    allBlobs
        .attr('transform', blobInitialPosition)
        .transition() // Transition up/down
        .duration(function() {
            // TODO maybe base speed off of the size of the blob?
            return d3.randomUniform(9000, 90000)()
        })
        .ease(d3.easeLinear)
        .on('start', function repeat() { //TODO cancel transitions on resize, and restart
            // Begin transform on start
            d3.active(this)
                .attr('transform', blobTransform)
                .transition() // now reverse!
                .attr('transform', blobTransform)
                .on('start', repeat) // repeat!
        })
}
initializeBlobs()
moveBlobs()
window.addEventListener('resize', moveBlobs)