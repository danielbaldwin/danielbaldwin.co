$(document).ready(function() {
    $('.progress .progress-bar').css("width",
        function() {
            return $(this).attr("aria-valuenow") + "%";
        }
    );
});
$(document).ready(function(){
    $( "#loader" ).delay(800).fadeOut(400, function(){
        $( "#your-page" ).fadeIn(400);
    });  
});