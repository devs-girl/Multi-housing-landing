(function ($) {
    "use strict";

    jQuery(document).ready(function ($) {
        // brand slider
        $(".brand-active").owlCarousel({
            items: 1,
            nav: true,
            navText: [
                '<i class="fal fa-chevron-left"></i>',
                '<i class="fal fa-chevron-right"></i>',
            ],
            dots: false,
            loop: true,
            // margin: 30,
            autoplay: true,
            autoplayHoverPause: true,
            arrows: false,
            autoplayTimeout: 2000,
            smartSpeed: 1000,
            responsiveClass: true,
            // overflow: hidden,
            responsive: {
                0: {
                    items: 2,
                },
                768: {
                    items: 4,
                },
                1000: {
                    items: 5,
                },
            },
        });

        // lg-slider
        $(".lg-active").owlCarousel({
            items: 1,
            nav: true,
            navText: [
                '<i class="fal fa-chevron-left"></i>',
                '<i class="fal fa-chevron-right"></i>',
            ],
            dots: true,
            loop: true,
            // margin: 20,
            autoplay: false,
            arrows: false,
            autoplayTimeout: 1000,
            smartSpeed: 1000,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 1,
                },
                1000: {
                    items: 1,
                },
            },
        });
    });
    jQuery(window).load(function () {});
})(jQuery);
