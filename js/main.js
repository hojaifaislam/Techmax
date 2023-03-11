(function ($) {
    "use strict";

    $(window).on('load', function(){
        //===== Prealoder
        $('.preloader').delay(500).fadeOut(500);

        //02. Isotope Initialize
        function isotopeInit() {
            $('.project_items').isotope({
                itemSelector: '.item',
                masonry: {
                    columnWidth: '.item'
                }
            });
            $('.project_filter_menu ul li').on('click', function () {
                $('.project_filter_menu ul li').removeClass('active');
                $(this).addClass('active');
                var selector = $(this).attr('data-filter');
                $('.project_items').isotope({
                    filter: selector
                });
                return false;
            });
        }
        isotopeInit();
    });

    $(document).ready(function () {
        //05. sticky header
        function sticky_header(){
            var wind = $(window);
            var sticky = $('header');
            wind.on('scroll', function () {
                var scroll = wind.scrollTop();
                if (scroll < 100) {
                    sticky.removeClass('sticky');
                } else {
                    sticky.addClass('sticky');
                }
            });
        }
        sticky_header();
        //===== Back to top

        // Show or hide the sticky footer button
        $(window).on('scroll', function () {
            if ($(this).scrollTop() > 600) {
                $('.back-to-top').fadeIn(200)
            } else {
                $('.back-to-top').fadeOut(200)
            }
        });

        //Animate the scroll to yop
        $('.back-to-top').on('click', function (event) {
            event.preventDefault();

            $('html, body').animate({
                scrollTop: 0,
            }, 1500);
        });

        // Hamburger-menu
        $('.hamburger-menu').on('click', function () {
            $('.hamburger-menu .line-top, .ofcavas-menu').toggleClass('current');
            $('.hamburger-menu .line-center').toggleClass('current');
            $('.hamburger-menu .line-bottom').toggleClass('current');
        });
        
        // AOS-plugins

         AOS.init({
        duration: 2000,
       });


        //06. magnific Popup Initialize
        function magnificPopupInit() {
            $('.content a').magnificPopup({
                type: 'image',
                gallery: {
                    enabled: true
                }
            });
        }
        magnificPopupInit();

        //10. Client Slider Initialize
            $('.owl-carousel.client_carousel').owlCarousel({
                loop: true,
                margin: 30,
                items: 1,
                autoplay: true,
                autoplayTimeout: 2000,
                autoplayHoverPause: true,
                nav: false,
                dots: false,
                responsive: {
                    0: {
                        items: 1
                    },
                    390: {
                        items: 1
                    },
                    575:{
                        items: 1
                    },
                    768: {
                        items: 1
                    },
                    992: {
                        items: 1
                    }
                }
            });

         //11. Client Slider Initialize
            $('.owl-carousel.trust_carousel').owlCarousel({
                loop: true,
                margin: 20,
                items: 6,
                autoplay: true,
                autoplayTimeout: 1500,
                autoplayHoverPause: true,
                nav: false,
                dots: false,
                responsive: {
                    0: {
                        items: 1
                    },
                    390: {
                        items: 2
                    },
                    575:{
                        items: 3
                    },
                    768: {
                        items: 4
                    },
                    992: {
                        items: 6
                    }
                }
            });

        //11. Video Popup Initialize
        function videoPopupInit() {
            $('#play-video').magnificPopup({
                type: 'iframe',
                iframe: {
                    patterns: {
                        youtube: {
                          index: 'youtube.com/', 

                          id: 'v=',
                          src: 'https://www.youtube.com/embed/%id%?autoplay=1'
                        },
                    },

                  srcAction: 'iframe_src',
                }
            });
        }
        videoPopupInit();
    });

})(jQuery);

    //Counter Number
        $('.counter_area').on('inview', function(event, visible) {
            if (visible) {
                $(this).find('.counter').each(function () {
                    var $this = $(this);
                    $({ Counter: 0 }).animate({ Counter: $this.text() }, {
                
                        duration: 1500,
                        easing: 'swing',
                        step: function () {
                            $this.text(Math.ceil(this.Counter));
                        }
                    });
                });
                $(this).unbind('inview');
            }
        });

        // titl js
         var typed = new Typed('.type', {
          strings: [ 
          'Website Solutions'
          ],
            typeSpeed: 60,
            backSpeed: 60,
            loop: true
        });
        
        $('#play-video').on('click', function(e){
  e.preventDefault();
  $('#video-overlay').addClass('open');
  $("#video-overlay").append('<iframe width="560" height="315" src="https://www.youtube.com/embed/ngElkyQ6Rhs" frameborder="0" allowfullscreen></iframe>');
});

$('.video-overlay, .video-overlay-close').on('click', function(e){
  e.preventDefault();
  close_video();
});

$(document).keyup(function(e){
  if(e.keyCode === 27) { close_video(); }
});

function close_video() {
  $('.video-overlay.open').removeClass('open').find('iframe').remove();
};   