// Stolen from: http://stackoverflow.com/questions/11381673/detecting-a-mobile-browser
// window.mobilecheck = function() {
//     var check = false;
//     (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
//     return check;
// }

// document.ontouchmove = function(event){
//     event.preventDefault();
// }

// function positionAndSize() {

//     var logo = d3.selectAll(".logo")

//     // Set view box for logo
//     logo.attr('viewBox', function() {
//         var dimensions = this.getBBox()
//         return '0 0 ' + dimensions.width + ' ' + dimensions.height
//     })

//     logo.selectAll('path').attr('fill-opacity', 0).attr('stroke-opacity', 0)

//     var logoBackground = d3.select('#logoBackground'),
//         backgroundDimensions = logoBackground.node().getBBox(),
//         backgroundRatio = backgroundDimensions.height / backgroundDimensions.width,
//         backgroundWidth = window.innerWidth/2,
//         backgroundHeight = backgroundRatio * (backgroundWidth)

//     logoBackground.attr('width', backgroundWidth)
//         .attr('height', backgroundHeight)
//         .attr('x', window.innerWidth/2 - backgroundWidth/2)
//         .attr('y', window.innerHeight/2 - backgroundHeight/2)

//     var logoForefront = d3.select('#logoForefront'),
//         forefrontDimensions = logoForefront.node().getBBox(),
//         forefrontWidthOffset = backgroundDimensions.width - forefrontDimensions.width,
//         forefrontHeightOffset = backgroundDimensions.height - forefrontDimensions.height,
//         forefrontRatio = forefrontDimensions.height / forefrontDimensions.width,
//         forefrontWidth = window.innerWidth/2 - forefrontWidthOffset,
//         forefrontHeight = forefrontRatio * (forefrontWidth)
    
//     logoForefront.attr('width', forefrontWidth)
//         .attr('height', forefrontHeight)
//         .attr('x', window.innerWidth/2 - logoForefront.attr('width')/2)
//         .attr('y', window.innerHeight/2 - logoForefront.attr('height')/2)

//     var bottomBlob = d3.select('#botBlob'),
//         topBlob = d3.select('#topBlob')
        
//     bottomBlob.attr('transform', function() {
//         var dimensions = this.getBBox(),
//             scaleWidthRatio = window.innerWidth / dimensions.width
//             xPosDifference = (0 - dimensions.x)/scaleWidthRatio,
//             yPosDistance = window.innerHeight - dimensions.y - (dimensions.height/1.5)

//         return 'scale(' + scaleWidthRatio + ',1) ' +
//             'translate(' + xPosDifference + ',' + yPosDistance + ')'
//     })

//     topBlob.attr('transform', function() {
//         var dimensions = this.getBBox(),
//             scaleWidthRatio = window.innerWidth / dimensions.width
//             xPosDifference = (0 - dimensions.x)/scaleWidthRatio,
//             yPosDistance = 0 - dimensions.y - (dimensions.height/3)

//         return 'scale(' + scaleWidthRatio + ',1) ' +
//             'translate(' + xPosDifference + ',' + yPosDistance + ')'
//     })

//     logo.selectAll('path').transition().duration(1000).attr('fill-opacity', 1).attr('stroke-opacity', 1)
// }

// function blobInitialPosition() {
//     var midpoint = window.innerWidth/2, deviation = midpoint/2,
//         dimensions = this.getBBox(),
//         xPos = d3.randomUniform(midpoint - deviation, midpoint + deviation - dimensions.width)(),
//         topOrBottom = Math.random() >= 0.5,
//         topPos = -1 * dimensions.height,
//         bottomPos = window.innerHeight + dimensions.height

//     return 'translate(' + xPos + ',' + (topOrBottom ? topPos : bottomPos) + ')'
// }

// function blobTransform() {
//     var currentValue = d3.select(this).attr('transform'),
//         xTranslate = parseInt(currentValue.slice(currentValue.indexOf('(') + 1, currentValue.indexOf(','))),
//         yTranslate = parseInt(currentValue.slice(currentValue.indexOf(',') + 1, currentValue.indexOf(')'))),
//         dimensions = this.getBBox(),
//         xPos = dimensions.x + xTranslate, yPos = dimensions.y + yTranslate,
//         newYPos = yPos >= 0 ? (0 - dimensions.height) : (window.innerHeight + dimensions.height)
    
//     return 'translate(' + xPos + ',' + newYPos + ')'
// }

// function initializeBlobs() {
//     // Depending on some number specified... copy paths of existing blobs and duplicate them
//     var blobsContainer = d3.select('#blobs'),
//         blobTemplates = blobsContainer.selectAll('path'),
//         blobMultiplier = 10

//     blobTemplates.each(function duplicate() {
//         var currentBlob = d3.select(this),
//             path = currentBlob.attr('d'),
//             style = currentBlob.attr('style')

//         for(var dup = 1; dup < blobMultiplier; dup++) {
//             blobsContainer
//                 .append('path')
//                 .attr('d', path)
//                 .attr('style', style)
//         }
//     })

//     d3.select('#blobs').selectAll('path').attr('transform', blobInitialPosition)
// }

// function moveBlobs() {

//     var allBlobs = d3.select('#blobs').selectAll('path')
//     allBlobs.interrupt() // disable any pending transitions
//     allBlobs
//         .attr('transform', blobInitialPosition)
//         .transition() // Transition up/down
//         .duration(function() {
//             // TODO maybe base speed off of the size of the blob?
//             return d3.randomUniform(9000, 90000)()
//         })
//         .ease(d3.easeLinear)
//         .on('start', function repeat() { //TODO cancel transitions on resize, and restart
//             // Begin transform on start
//             d3.active(this)
//                 .attr('transform', blobTransform)
//                 .transition() // now reverse!
//                 .attr('transform', blobTransform)
//                 .transition()
//                 .on('start', repeat) // repeat!
//         })// }

// function enableFilter() {
//     d3.select('#filterGroup').attr('filter', 'url(#goo)')
// }


// positionAndSize()
// initializeBlobs()
// moveBlobs()
// window.addEventListener('resize', positionAndSize)
// window.addEventListener('resize', moveBlobs)

// if (!window.mobilecheck()) {
//     enableFilter()
// }

function setLogoViewBox() {
    var logoWrapper = d3.select("#wrapper"),
        logoDimensions = logoWrapper.node().getBBox()

    logoWrapper.attr('viewBox', '0 0 ' + logoDimensions.width + ' ' + logoDimensions.height)
}

function resize() {
    var logoWrapper = d3.select("#wrapper"),
        logoDimensions = logoWrapper.node().getBBox(),
        logoAspectRatio = logoDimensions.height / logoDimensions.width,
        logoWidth = window.innerWidth/2.5,
        logoHeight = logoAspectRatio * logoWidth

    logoWrapper.attr('width', logoWidth).attr('height', logoHeight)
}

function randomBetween(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min)
}

function animate() {
    var tl = new TimelineMax(),
        logoWrapper = d3.select("#wrapper"),
        logoDimensions = logoWrapper.node().getBBox(),
        logoAspectRatio = logoDimensions.height / logoDimensions.width,
        logoWidth = window.innerWidth/2.5,
        logoHeight = logoAspectRatio * logoWidth

    var blobs = document.querySelectorAll('#lava path')
    for(var i = 0; i < blobs.length; i++){

      var t = TweenMax.to(blobs[i], randomBetween(14, 50), {
        y:logoHeight+100,
        repeat:-1,
        repeatDelay:randomBetween(1, 3),
        yoyo:true,
        ease:Linear.easeNone
      })

      tl.add(t, (i+1)/0.6)
    }

    tl.seek(100)
}

setLogoViewBox()
resize()
animate()

if (!window.mobilecheck()) {
    window.addEventListener('resize', resize)
}