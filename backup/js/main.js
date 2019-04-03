;(function($){
    "use strict";

    /*-------------------------------------------------------------------------------
	  Navbar 
	-------------------------------------------------------------------------------*/

	//* Navbar Fixed  
    function navbarFixed(){
        if ( $('.header_area').length ){ 
            $(window).scroll(function() {
                var scroll = $(window).scrollTop();   
                if (scroll){
                    $(".header_area").addClass("navbar_fixed");
                } else {
                    $(".header_area").removeClass("navbar_fixed");
                }
            });
        };
    };
    navbarFixed();
    
    
    /*--------- WOW js-----------*/
    function wowAnimation(){
        new WOW({
            offset: 100,          
            mobile: true
        }).init()
    }
    wowAnimation()
    
    var $window = $(window);
    
    if($(window).width() > 576){
        $window.trigger('scroll');
    }
    
    /*===========Start about_img_slider js ===========*/
    function aboutSlider(){
        var reviews_slider2 = $(".about_img_slider");
        if( reviews_slider2.length ){
            reviews_slider2.owlCarousel({
                loop:true,
                margin:0,
                items: 1,
                nav:false,
                autoplay: false,
                smartSpeed: 2000,
                responsiveClass:true,
            })
        }
    }
    aboutSlider();
    /*=========== End about_img_slider js ===========*/
    
    
    /*===========Start app_testimonial_slider js ===========*/
    function appScreenshot(){
        var app_screenshotSlider = $(".app_screenshot_slider");
        if( app_screenshotSlider.length ){
            app_screenshotSlider.owlCarousel({
                loop:true,
                margin:10,
                items: 3,
                autoplay: false,
                smartSpeed: 2000,
                responsiveClass:true,
                nav: true,
                dots: false,
                navText: ['<i class="ti-arrow-left"></i>','<i class="ti-arrow-right"></i>'],
                navContainer: '.app_screenshot_slider',
                responsiveClass:true,
                responsive:{
                    0:{
                        items: 1
                    },
                    650:{
                        items:2, 
                    },
                    776:{
                        items:2, 
                    },
                    1199:{
                        items:3,   
                    },
                },
            })
        }
    }
    appScreenshot();
    /*===========End app_testimonial_slider js ===========*/
    
    /*--------------- End popup-js--------*/
    function popupGallery(){
        if ($(".img_popup,.image-link").length) {
            $(".img_popup,.image-link").each(function(){
                $(".img_popup,.image-link").magnificPopup({
                    type: 'image',
                    tLoading: 'Loading image #%curr%...',
                    removalDelay: 300,
                    mainClass:  'mfp-with-zoom mfp-img-mobile',
                    gallery: {
                        enabled: true,
                        navigateByImgClick: true,
                        preload: [0,1] // Will preload 0 - before current, and 1 after the current image,
                    }
                });
            })
        }
        if($('.popup-youtube').length){
            $('.popup-youtube').magnificPopup({
                disableOn: 700,
                type: 'iframe',
                removalDelay: 160,
                preloader: false,
                fixedContentPos: false,
                mainClass:  'mfp-with-zoom mfp-img-mobile',
            });
        }
    }
    popupGallery();
    
    /*------------- preloader js --------------*/
   
   
    function loader(){
        $(window).on('load', function() {
            $('#ctn-preloader').addClass('loaded');
            // Una vez haya terminado el preloader aparezca el scroll

            if ($('#ctn-preloader').hasClass('loaded')) {
                // Es para que una vez que se haya ido el preloader se elimine toda la seccion preloader
                $('#preloader').delay(900).queue(function () {
                    $(this).remove();
                });
            }
        });
    }
    loader();

})(jQuery)