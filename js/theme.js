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
$(document).ready(function(){
	 $('.lazy').Lazy({
        effect: 'fadeIn',
        effectTime: 2000,
        threshold: 0,
        visibleOnly: true
    });
});