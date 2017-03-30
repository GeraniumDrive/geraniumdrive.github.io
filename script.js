
function resizeAndRepositionLogo() {

    var logo = d3.selectAll(".logo"),
        windowHeight = window.innerHeight,
        windowWidth = window.innerWidth,
        newWidth = windowWidth/2

    logo.attr('width', newWidth)
        .attr('x', windowWidth/2 - newWidth/2)
        .attr('y', function(d, i) {
            var dimensions = this.getBBox(),
                ratio = dimensions.height / dimensions.width,
                newHeight = ratio * newWidth


            return windowHeight/2 - newHeight/2
        })
}
if (d3.select(".logo").size() >= 1) {
    window.addEventListener('resize', resizeAndRepositionLogo)
    resizeAndRepositionLogo()
}

function blobs() {
    var path = d3.path()

    path.moveTo(100, 100)
    path.arcTo(200, 200, 300, 300, 100)
    path.closePath()
}
blobs()