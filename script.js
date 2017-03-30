
function resizeAndRepositionLogo() {

    var logo = d3.selectAll(".logo"),
        windowHeight = window.innerHeight,
        windowWidth = window.innerWidth,
        newWidth = windowWidth/2

    // Set view box
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
}
if (d3.select(".logo").size() >= 1) {
    window.addEventListener('resize', resizeAndRepositionLogo)
    resizeAndRepositionLogo()
}

// function blobs() {
//     var blobContainer = d3.select('#blobs'),
//         windowHeight = window.innerHeight,
//         windowWidth = window.innerWidth

//     blobContainer.attr('width', windowWidth).attr('height', windowHeight)

//     var blobs = d3.selectAll('.blob'),
//         xScale = d3.scaleLinear().domain([0, blobs.size()+1]).range([0, window.innerWidth])

//     // Set initial blob position
//     blobs.attr('transform', function(d, i) { return 'translate(' + xScale(i+1) + ',-100)' })

//     // Start Y axis transition
//     blobs.transition().duration(10000)
//         .attr('transform', function(d, i) { return 'translate(' + xScale(i+1) + ',' + windowHeight + ')' })
// }
// window.addEventListener('resize', blobs)
// blobs()