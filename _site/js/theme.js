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
    scale    : 1
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

})();