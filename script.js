(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

// Stolen from: http://stackoverflow.com/questions/11381673/detecting-a-mobile-browser
window.mobilecheck = function() {
    var check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
}

// Stolen from: http://stackoverflow.com/questions/4298612/jquery-how-to-call-resize-event-only-once-its-finished-resizing
function debouncer(func, timeout) {
   var timeoutID , timeout = timeout || 200;
   return function () {
      var scope = this , args = arguments;
      clearTimeout( timeoutID );
      timeoutID = setTimeout( function () {
          func.apply( scope , Array.prototype.slice.call( args ) );
      } , timeout );
   }
}

function randomBetween(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min)
}

function showLogo() {
    d3.select("#logoLamp").classed("hidden", false)
}

function showBlobs() {
    d3.select("#lava").classed("hidden", false)
    window.setTimeout(animate, 1000)
}

function hideSectionLoader(container) {
    container.select(".loader").classed("hidden", true)
}

function showFacebook() {
    d3.select("#media").classed("hidden", false)
}

function loadFacebookPlugin() {
    var container = d3.select('#media .panelBody'),
        dimensions = container.node().getBoundingClientRect()

    container.select('.fb-page').remove()

    container.insert('div').classed('fb-page', true)
      .attr('data-href', 'https://www.facebook.com/geraniumdrive/')
      .attr('data-tabs', 'timeline,events,messages')
      .attr('data-small-header', 'false')
      .attr('data-adapt-container-width', 'false')
      .attr('data-hide-cover', 'false')
      .attr('data-show-facepile', 'false')
      .attr('data-width', Math.round(dimensions.width)-20)
      .attr('data-height', Math.round(dimensions.height))
        .insert('blockquote')
        .classed('fb-xfbml-parse-ignore', true)
        .attr('cite', 'https://www.facebook.com/geraniumdrive/')
          .insert('a').attr('href', 'https://www.facebook.com/geraniumdrive/')
            .text('Geranium Drive')
    FB.XFBML.parse(document.getElementById('media'))
    window.setTimeout(showFacebook, 1000)
}

function showBandcamp() {
    d3.select("#releases").classed("hidden", false)
}

function loadBandcampPlugin() {
    window.setTimeout(showBandcamp, 1000)
}

function animate() {
    var logoWrapper = d3.select("#logoLamp"),
        logoDimensions = logoWrapper.node().getBBox(),
        blobs = document.querySelectorAll('.blob')

    for(var i = 0; i < blobs.length; i++) {
      var currentBlob = d3.select(blobs[i]).node().getBBox(),
        speed = (currentBlob.width + currentBlob.height)/randomBetween(2, 4) +
            randomBetween(1, currentBlob.width)
      
      TweenMax.to(blobs[i], speed, {
        y:logoDimensions.height*-1,
        repeat:-1,
        yoyo:true,
        ease:Linear.easeNone
      })
    }
}

var windowWidth = window.innerWidth
window.fbAsyncInit = function() {
  FB.init({
    appId      : '1226055317538283',
    xfbml      : false,
    version    : 'v2.9'
  })
  FB.AppEvents.logPageView()

  window.setTimeout(loadFacebookPlugin, 2000)
  window.addEventListener('resize', debouncer(() => {
    if (window.innerWidth !== windowWidth) {
        windowWidth = window.innerWidth
        loadFacebookPlugin()
    }
  }))
}

showLogo()
if (!window.mobilecheck()) showBlobs()
window.setTimeout(loadBandcampPlugin, 500)
