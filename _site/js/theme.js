//disabling scrolling

var keys = {37: 1, 38: 1, 39: 1, 40: 1, 32: 1};

function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault)
      e.preventDefault();
  e.returnValue = false;
}

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}

//disable scroll
function disableScroll() {
  if (window.addEventListener) // older FF
      window.addEventListener('DOMMouseScroll', preventDefault, false);
  window.onwheel = preventDefault; // modern standard
  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
  window.ontouchmove  = preventDefault; // mobile
  document.onkeydown  = preventDefaultForScrollKeys;
}

//enable scroll
function enableScroll() {
    if (window.removeEventListener)
        window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.onmousewheel = document.onmousewheel = null;
    window.onwheel = null;
    window.ontouchmove = null;
    document.onkeydown = null;
}

/* Preloader */

$(document).ready(function() {
    $('.progress .progress-bar').css("width",
        function() {
            return $(this).attr("aria-valuenow") + "%";
        }
    );
});
$(document).ready(function(){
  $('body').addClass('loaded');
	$('#loader').fadeOut();
    /*$( "#loader" ).delay(1000).fadeOut(500, function(){
        $( "#home" ).fadeIn(500);
    });*/
});


/* Lazy Load Case Study Images */

$(document).ready(function(){
	 $('.lazy').Lazy({
        //effect: 'fadeIn',
        //effectTime: 700,
        //threshold: 0
    });
});

/* Body FadeOutIn */

$(document).ready(function() {

    $("a").not(".share-link").click(function(event){
        event.preventDefault();
        linkLocation = this.href;
        $("body").fadeOut(1000, redirectPage);
    });

    function redirectPage() {
        window.location = linkLocation;
    }
});

/* Hamburger Menu Toogle Animation */


$(document).ready(function() {

 $(".c-hamburger").click(function(){
    $(this).toggleClass("is-active");
  	$('nav').toggleClass('open');
    if( $(this).hasClass('is-active') ){
      disableScroll();
    }else{
      enableScroll();
    }    
    });

});

$(window).on('scroll load', function(){
  
  var st = $(window).scrollTop();
  
  if( st > 150  && st < 700){
    $('nav').addClass('content-hidden');
  }else if( st > 700 ){
    $('nav').addClass('fixed');
    $('nav').removeClass('content-hidden');
  }else{
    $('nav').removeClass('content-hidden');
    $('nav').removeClass('fixed');    
  }
});






/*
 * Replace all SVG images with inline SVG
 */
    jQuery('img.svg').each(function(){
        var $img = jQuery(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');

        jQuery.get(imgURL, function(data) {
            // Get the SVG tag, ignore the rest
            var $svg = jQuery(data).find('svg');

            // Add replaced image's ID to the new SVG
            if(typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            // Add replaced image's classes to the new SVG
            if(typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass+' replaced-svg');
            }

            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr('xmlns:a');

            // Replace image with new SVG
            $img.replaceWith($svg);

        }, 'xml');

    });
    
    
    
    
/* detect mouse move */


$(window).on('mousemove', function(e){
  
  var cursorTop = parseInt(e.originalEvent.clientY / $(window).height() * 100);
  var cursorLeft = parseInt(e.originalEvent.clientX / $(window).width() * 100);
  
  $('.cursor-animate').each(function(){
    
    var offsetXLimit = parseInt(($(this).attr('data-offsetX') / 100) * cursorLeft);
    var offsetYLimit = parseInt(($(this).attr('data-offsetY') / 100) * cursorTop);
    
    $(this).css('transform', 'translateX('+ -offsetXLimit+'px) translateY('+ -offsetYLimit+'px)')
    
  });
  
  
});    

$('.blog-wrapper').infiniteScroll({
  // options
  append: '.post',
  path: '.pagination__next',
  hideNav: '.pagination'
});
