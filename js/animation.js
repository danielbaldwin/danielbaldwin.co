var controller = new ScrollMagic.Controller();
var staticController = new ScrollMagic.Controller();
var mainAnimation = function(){



var homeCircleShift = new ScrollMagic.Scene({
  duration: $(window).height()*0.7,
  triggerElement: $('.db-icon'),
  triggerHook: "onEnter",
  offset: $(window).height()*0.7
}).setTween(".db-icon .circle", {'border-radius': 0, y: $(window).height()*0.45 })
.addTo(controller);


$('.elements-in').each(function (index, elem) {
    new ScrollMagic.Scene({
      duration: 1,
      triggerElement: elem,
      //triggerHook: "onEnter"
      offset: -($(elem).outerHeight()/4)
    }).on("progress", function(event){
      if( event.progress == 1 ){
        $(elem).addClass('active');
      }else{
        if( !$(elem).hasClass('once') ){
          $(elem).removeClass('active');
        }
      }
    }).addTo(controller);
});




$('.os-transform').each(function (index, elem) {
    var targetPosY = $(this).attr('data-transformY');
    var tween = TweenMax.to(elem, 0.5,
          {y: targetPosY , ease: Power0.easeNone }
    );
    new ScrollMagic.Scene({
      //duration: $(window).height() + $(elem).height(),
      duration: $(window).height() * 2,  
      triggerElement: elem,
      triggerHook: "onEnter"
    }).setTween(tween).addTo(controller);
});




};

//on load show illustration

$(window).on('load', function(){
  mainAnimation();
});


$(window).on('resize',function(){
  controller = controller.destroy(true);
  controller = new ScrollMagic.Controller();
  mainAnimation();
});
