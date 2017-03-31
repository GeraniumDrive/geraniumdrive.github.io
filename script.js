
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
        .attr('x', window.innerWidth/2 - logoBackground.attr('width')/2)
        .attr('y', window.innerHeight/2 - logoBackground.attr('height')/2)

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
            scaleWidthRatio = logoBackground.attr('width') / dimensions.width
            xPosDifference = ((window.innerWidth/2 - logoBackground.attr('width')/2) - dimensions.x)/scaleWidthRatio,
            yPosDistance = window.innerHeight - dimensions.y - (dimensions.height/1.5)

        return 'scale(' + scaleWidthRatio + ',1) ' +
            'translate(' + xPosDifference + ',' + yPosDistance + ')'
    })

    topBlob.attr('transform', function() {
        var dimensions = this.getBBox(),
            scaleWidthRatio = logoBackground.attr('width') / dimensions.width
            xPosDifference = ((window.innerWidth/2 - logoBackground.attr('width')/2) - dimensions.x)/scaleWidthRatio,
            yPosDistance = 0 - dimensions.y - (dimensions.height/3)

        return 'scale(' + scaleWidthRatio + ',1) ' +
            'translate(' + xPosDifference + ',' + yPosDistance + ')'
    })
}
if (d3.select(".logo").size() >= 1) {
    window.addEventListener('resize', positionAndSize)
    positionAndSize()
}

function blobs() {
    // xScale = d3.scaleLinear().domain([0, blobs.size()+1]).range([0, window.innerWidth])

    // Depending on some number specified... copy paths of existing blobs and duplicate them
    // Maybe we can just copy each blob the same number of times? (always even count of blobs)
    var blobTemplates = d3.select('#blobs').selectAll('path')

    // Position blobs
    var allBlobs = d3.select('#blobs').selectAll('path'),
        midpoint = window.innerWidth/2, deviation = midpoint/2

    allBlobs.attr('transform', function() {
        var xPos = d3.randomUniform(midpoint - deviation, midpoint + deviation)(),
            dimensions = this.getBBox()

        // TODO change starting yposition randomly? (top/bottom?)
        return 'translate(' + xPos + ',-' + dimensions.height + ')'
    })

    // Apply transitions to each blob
    allBlobs.transition()
        .duration(function() { return d3.randomUniform(750, 10000)() })
        .attr('transform', function() {
            var currentValue = d3.select(this).attr('transform'),
                xPos = currentValue.slice(currentValue.indexOf('(') + 1, currentValue.indexOf(',')),
                dimensions = this.getBBox(),
                newYPos = dimensions.y >= 0 ? (0 - dimensions.height) : (window.innerHeight + dimensions.height)
            
            return 'translate(' + xPos + ',' + newYPos + ')'
        })
}
blobs()