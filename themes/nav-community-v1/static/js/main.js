(function($) {
    "use strict";
		
/* ==========================================
           1. Skew BG
========================================== */  	
	

	
	function skew_position() {
    var window_width = jQuery(window).width();
    var skew_square_height = window_width / 18.5;
    jQuery(".skew_appended").height(skew_square_height + "px").css("bottom", "-" + skew_square_height / 2 + "px").css("-webkit-backface-visibility", "hidden !important");
	  jQuery(".skew_prepended").height(skew_square_height + "px").css("top", "-" + (skew_square_height / 2 + 1) + "px").css("-webkit-backface-visibility", "hidden !important");

   jQuery(".skew").not(".module_google_map").append('<div class="skew_appended"></div>');
   jQuery(".skew, .module_google_map .skew, .pre_footer.skew").not(".remove-top-skew").append('<div class="skew_prepended"></div>');
   
 }

	skew_position();
	
	
	var windos = $(window);
	windos.resize( function(){
    skew_position();
  });
  
  
	
/* ==========================================
           1. owl carousel
========================================== */  
$('.owl-carousel').owlCarousel({
    loop:true,
    autoplay:false,
    smartSpeed:1000,
    items:1,
    navText:["<i class=' fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
    responsiveClass:true,
    responsive:{
        0:{
            items:1
            
        },
        600:{
            items:1
           
        },
        1000:{
            items:1
            
         
        }
    }
});

/* ==========================================
           2. stickey menu
   ========================================== */

function sticky_menu(){

var windows = $(window);
windows.on('scroll',function(){
  var scroll = windows.scrollTop();
    if(scroll < 110){   
        $("#stickey-menu").removeClass("stickey");
    }else{
        $("#stickey-menu").addClass("stickey");
    }
    
});

}
sticky_menu();





/* ==========================================
           4. service slider
========================================== */
$('.service-slider-section').owlCarousel({
    loop:true,
    autoplay:true,
    smartSpeed:2000,
    responsiveClass:true,
    margin:20,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:1,
        },
       1000:{
            items:3
            
    
        }
    }
});

/* ==========================================
           5. testimonial-slider
========================================== */
$('.testimonial-slider-wrapper').owlCarousel({
    loop:true,
    autoplay:true,
    nav:true,
    smartSpeed:2000,
    navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:1,
        },
       1000:{
            items:1
            
    
        }
    }
});
/* ==========================================
           6. exclusive features
========================================== */
$('#features').zenith({
          slideSpeed: 600, 
          autoplaySpeed: 2000,
          animation : "RotateDown",
          autoplay:true
      });
    

/* ==========================================
           7. Preloader
========================================== */
 
         $(window).load(function(){
          $('.preloader').fadeOut(1000);  
        });
 
/* ==========================================
           8.  App Screenshots
========================================== */





function waterwheelCarousel(){

      $(".apps-carousel").waterwheelCarousel({
        autoPlay :4000,
        speed :200,
        animationEasing :'linear',
       preloadImages : true,
       sizeMultiplier: 0.6
    });
}
waterwheelCarousel();

function mobiCarousel(){

      $(".mobi-carousel").waterwheelCarousel({
        autoPlay :4000,
        speed :200,
        sidePadding :60,
        topPadding:10,
        animationEasing :'linear',
       preloadImages : true,
       sizeMultiplier: 0.6,
       orientation : "vertical"
    });
}

var windows = $(window);
var winWidth = windows.width();

 if(winWidth < 700) {

   $(".mobi-carousel").removeClass("apps-carousel").addClass("sm-carousel");

   mobiCarousel();
 }


 

/* ==========================================
           9. background video
========================================== */


   if ($("#video").length > 0) {


    $(".autoplay").magnificPopup({

        type: "iframe"
    });
}

/* ==========================================
           10. Smooth Scroll
========================================== */
var scroll = new SmoothScroll();
var smoothScrollWithoutHash = function (selector, settings) {
  /**
   * If smooth scroll element clicked, animate scroll
   */
  var clickHandler = function (event) {
    var toggle = event.target.closest( selector );
    
    if ( !toggle || toggle.tagName.toLowerCase() !== 'a' ) return;
    
    var anchor = document.querySelector( toggle.hash );
    if ( !anchor ) return;

    event.preventDefault(); // Prevent default click event
    scroll.animateScroll( anchor, toggle, settings || {} ); // Animate scroll
  };

  window.addEventListener('click', clickHandler, false );
};
smoothScrollWithoutHash( 'a[href*="#"]' );

})(jQuery);

	
 