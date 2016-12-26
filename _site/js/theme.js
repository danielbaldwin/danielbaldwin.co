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
        $( "#your-page" ).fadeIn(500);
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

/* Animate the fade in of case studies */

$(document).ready(function(){
  window.sr = ScrollReveal({ reset: true });
	sr.reveal('.hovereffect', { duration: 1000 });
});

/* BarbaJS Transitions */
window.onload = function() {
  Barba.Pjax.start();
}