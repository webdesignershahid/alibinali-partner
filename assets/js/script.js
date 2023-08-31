(function ($) {
    "use strict";

    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    });

    var aba = {

        mobile_expand_menu: function(){
            //=============  Mobile Menu Integration  =============\\
            function mobile_menu(selector, actionSelector) {
                var mobile_menu = $(selector);
                mobile_menu.on("click", function() {
                    $(selector).toggleClass('navbar__toggled');
                });
                
                var hamburgerbtn = $(selector);
                hamburgerbtn.on("click", function() {
                    $(actionSelector).toggleClass('navbar__toggled');
                });

                $(document).on('click', function(e) {
                    var selectorType = $(actionSelector).add(mobile_menu);
                    if (selectorType.is(e.target) !== true && selectorType.has(e.target).length === 0) {
                        $(actionSelector).removeClass("navbar__toggled");
                        $(selector).removeClass("navbar__toggled");
                    }
                });            
            };
            mobile_menu('.sidebar_toggler button, .close-menu', '.mobile-menu');  


            //Clone Mobile Menu
            function cloneMobileMenu($cloneItem, $mobileLoc) {
                var $combinedmenu = $($cloneItem).clone();
                $combinedmenu.appendTo($mobileLoc);                
            }
            cloneMobileMenu("header .header-main .main-menu", ".mobile-menu .nav-menu");

        },
        /* ============================================================ */
        /* Swiper Slider Init
        /* ============================================================ */
        swiperCarousel: function () {
            var header_partner__slider = new Swiper('.header-partners .swiper', {
                slidesPerView: 2,
                spaceBetween: 15,
                autoplay: {
                    delay: 5000,
                },
                loop: 1,
                speed: 1000,
                breakpoints: {
                    576: {
                        slidesPerView: 3,
                    },
                },  
            });
            let announcement_slider = new Swiper('.announcement_slider', {
                spaceBetween: 0,
                centeredSlides: true,
                speed: 10000,
                autoplay: {
                    delay: 1,
                },
                loop: true,
                slidesPerView:'auto',
                allowTouchMove: false,
                disableOnInteraction: true
            });
              
            var hero__slider = new Swiper('.hero__slider', {
                slidesPerView: 1,
                autoplay: {
                    delay: 5000,
                },
                loop: 1,
                speed: 1000,
                effect: "fade",
                pagination: {
                    el: ".hero__slider .hero__pagination",
                    clickable: true,
                },
                navigation: {
                    nextEl: ".hero__slider .btn-next-slide",
                    prevEl: ".hero__slider .btn-prev-slide",
                },
            });
            var product__slider = new Swiper('.product__slider', {
                slidesPerView: 1,
                spaceBetween: 20,
                autoplay: {
                    delay: 5000,
                },
                loop: !1,
                speed: 1000,                
                breakpoints: {
                    576: {
                        slidesPerView: 2,
                    },
                    992: {
                        slidesPerView: 3,
                    },
                    1200: {
                        slidesPerView: 4,
                    },
                },
                pagination: {
                    el: ".product__slider .slider__pagination",
                    clickable: true,
                },
                navigation: {
                    nextEl: ".product__slider .btn-next-slide",
                    prevEl: ".product__slider .btn-prev-slide",
                },
            });
            
            var brands__slider = new Swiper('.our_brands .brands__slider', {
                slidesPerView: 3,
                spaceBetween: 0,
                autoplay: {
                    delay: 4000,
                },
                loop: 1,
                speed: 800,
                breakpoints: {
                    768: {
                        slidesPerView: 4,
                    },
                    992: {
                        slidesPerView: 4,
                    },
                    1200: {
                        slidesPerView: 5,
                    },
                }, 
                navigation: {
                    nextEl: ".brands__slider .btn-next-slide",
                    prevEl: ".brands__slider .btn-prev-slide",
                }, 
            });
        },

        /* ============================================================ */
        /* Scroll Top
        /* ============================================================ */
        scroll_to_top: function() {
            $('body')
            .append(`
                <a href='#' title='Scroll Top' id='scroll-top' class='topbutton btn-hide text-white'>
                    <img src="assets/images/back-to-top.png" alt="Scroll to top"/>
                </a>
            `);
            var $scrolltop = $('#scroll-top');
            $(window).on('scroll', function () {
                if ($(this).scrollTop() > $(this).height()) {
                    $scrolltop.addClass('btn-show').removeClass('btn-hide');
                } else {
                    $scrolltop.addClass('btn-hide').removeClass('btn-show');
                }
            });
            $scrolltop.on('click', function () {
                $('html, body').animate({
                        scrollTop: 0,
                    },
                    50
                );
                return false;
            });
        },

        initialize: function() {0
			aba.mobile_expand_menu();
			aba.scroll_to_top();
			aba.swiperCarousel();
		}
    };
    $(function() {
		aba.initialize();
	});

    $(document).ready(function(){
        $('.mobile-menu .main-menu .submenu').addClass('collapse');
        $('.mobile-menu .menu-item-has-children > a').on('click', function(){
            $(this).parent().siblings('li').find('.collapse').collapse('hide');
            $(this).siblings('.submenu').collapse('toggle');
        });
    })

})(jQuery);
