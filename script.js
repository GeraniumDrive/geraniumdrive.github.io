
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

    var data = [0, 0, 0]

    d3.select('#blobs').selectAll('path')
        .data(data)
        .enter()
        .append('path').attr('class', 'blob')
}
// blobs()