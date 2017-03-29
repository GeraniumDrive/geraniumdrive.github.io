
function resizeAndRepositionLogo() {

    var logo = d3.select("#logo"),
        dimensions = logo.node().getBBox(),
        windowHeight = window.innerHeight,
        windowWidth = window.innerWidth,
        ratio = logo.node().getBBox().height / logo.node().getBBox().width,
        newWidth = windowWidth/2,
        newHeight = ratio * newWidth

    logo.attr('width', newWidth)
        .attr('x', windowWidth/2 - newWidth/2)
        .attr('y', windowHeight/2 - newHeight/2)
}
if (d3.select("#logo").size() === 1) {
    // window.addEventListener('resize', resizeAndRepositionLogo)
    resizeAndRepositionLogo()
}

function blobs() {
    var blobContainer = d3.select('#blobs'),
        windowHeight = window.innerHeight,
        windowWidth = window.innerWidth

    blobContainer.attr('width', windowWidth).attr('height', windowHeight)

    var blobs = d3.selectAll('.blob'),
        xScale = d3.scaleLinear().domain([0, blobs.size()+1]).range([0, window.innerWidth])

    // Set initial blob position
    blobs.attr('transform', function(d, i) { return 'translate(' + xScale(i+1) + ',-100)' })

    // Start Y axis transition
    blobs.transition().duration(10000)
        .attr('transform', function(d, i) { return 'translate(' + xScale(i+1) + ',' + windowHeight + ')' })
}
// window.addEventListener('resize', blobs)
blobs()