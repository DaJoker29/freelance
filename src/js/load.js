/*
    Code that gets run as soon as the site is loaded
 */
$(window).load(function() {
    // Declare Timing variables
    var fadeInterval = 500; // in milliseconds
    var carouselInterval = 7000; // in milliseconds

    // Remove Preloader
    $('#status').fadeOut();
    $('#preloader').delay(fadeInterval).fadeOut('slow');

    // Stagger Display
    $('.content > section').delay(fadeInterval).each(function( index ) {
        $(this).delay(fadeInterval * index).fadeIn('slow').animate({'left': 0, 'width': '100%', 'opacity': 1});
    }).promise().done(function() {
        // Load Hero Carousel
        $('.hero-slider').owlCarousel({
            singleItem: true,
            transitionStyle: 'backSlide',
            autoHeight: true,

            navigation: true,
            navigationText: ['Back', 'Next'],
            pagination: false,
            autoPlay: carouselInterval,
            stopOnHover: true
        });
        // Load Portfolio-Carousel
        $('.portfolio-carousel').owlCarousel({
            items: 4,
            lazyLoad: true,

            navigation: true,
            navigationText: ['Back', 'Next'],
            pagination: false,
            autoPlay: carouselInterval,
            stopOnHover: true
        });
    });
});

$(document).ready(function() {
});