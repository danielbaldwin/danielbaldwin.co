/* Preloader */

$(document).ready(function() {
    $('.progress .progress-bar').css("width",
        function() {
            return $(this).attr("aria-valuenow") + "%";
        }
    );
});
$(document).ready(function(){
    $( "#loader" ).delay(1000).fadeOut(500, function(){
        $( "#home" ).fadeIn(500);
    });  
});

/* Lazy Load Case Study Images */

$(document).ready(function(){
	 $('.lazy').Lazy({
        effect: 'fadeIn',
        effectTime: 700,
        threshold: 0
    });
});

/* ScrollReveal */

$(document).ready(function(){

var Reveal = {
    duration : 1000,
    distance : '100px',
    easing   : 'ease-in-out',
    opacity  : 0,
    reset    : false,
    scale    : 1,
    viewFactor: 0.1
};

  window.sr = ScrollReveal({ reset: true });
	sr.reveal('.hovereffect', Reveal);
    sr.reveal('.reveal', Reveal);
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
    $(this).toggleClass("is-active")
    $(".home-header").toggleClass("white")
    $(".about-header").toggleClass("white")
    $(".contact-header").toggleClass("white")
    });

});

/* On scroll, navigation drops down w/ white background */
var navbarVisible = false;
$(window).scroll(function(){
    var ht = $('header').height()+70;
    if ($(this).scrollTop() >= ht) {
        if (!navbarVisible) {
            $("#navb").addClass("navbar-fixed-top")
                .hide()
                .fadeTo('slow','1');

           /* $(".row:first").css("padding-top","50px"); */
            navbarVisible = true;
        };
    } else {
        $("#navb").removeClass("navbar-fixed-top").removeAttr('style');
        /* $(".row:first").css("padding-top","0px"); */
        navbarVisible = false;
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
