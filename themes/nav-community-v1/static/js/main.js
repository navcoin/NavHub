(function($) {
    "use strict";
		
/* ==========================================
           4. service slider
========================================== */
$('.service-slider-section').owlCarousel({
    loop: false,
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
$(window).on("load", function (e) {
  $('.preloader').fadeOut(1000);  
})
 
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

/* ==========================================
           11. Hamburgler Supreme
========================================== */

  var trigger = $('.hamburger'),
      overlay = $('.overlay'),
     isClosed = false;

    trigger.click(function () {
      hamburger_cross();      
    });

    function hamburger_cross() {

      if (isClosed == true) {          
        overlay.hide();
        trigger.removeClass('is-open');
        trigger.addClass('is-closed');
        isClosed = false;
      } else {   
        overlay.show();
        trigger.removeClass('is-closed');
        trigger.addClass('is-open');
        isClosed = true;
      }
  }
  
  $('[data-toggle="offcanvas"]').click(function () {
      $('#wrapper').toggleClass('toggled');
  });  

})(jQuery);

	
 