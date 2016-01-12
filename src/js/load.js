/*
    Code that gets run as soon as the site is loaded
 */
$(window).load(function() {
    /*
        Declare Timing Variables
     */
    var fadeInterval = 500; // in milliseconds
    var carouselInterval = 7000; // in milliseconds

    /*
        Remove Preloader
    */
    $('#status').fadeOut();
    $('#preloader').delay(fadeInterval).fadeOut('slow');

    /*
        Cascading Main Sections
     */
    $('.content > section').delay(fadeInterval).each(function( index ) {
            $(this).delay(fadeInterval * index).fadeIn('slow').animate({
                'left': 0,
                'width': '100%',
                'opacity': 1
            });
        }).promise().done(function() {
            // ONLY RUNS AFTER MAIN SECTIONS ARE DISPLAYED

            /*
                Hero Carousel
             */
            $('.hero-slider').owlCarousel({
                    autoPlay: carouselInterval,
                    navigation: false,
                    pagination: true,
                    singleItem: true,
                    stopOnHover: true,
                    transitionStyle: 'goDown'
                });

            /*
                Badge Carousel
             */
            $('.badge-carousel').owlCarousel({
                    autoPlay: carouselInterval,
                    navigation: false,
                    pagination: false
                }).promise().done(function() {
                    $('.badge-carousel').removeClass('hide');
                });

            /*
                Portfolio Carousel
             */
            $('.portfolio-carousel').owlCarousel({
                autoPlay: carouselInterval,
                items: 4,
                lazyLoad: true,
                navigation: false,
                pagination: true,
                stopOnHover: true
                }).promise().done(function() {
                    $('.portfolio-carousel').removeClass('hide');
                });

            /*
                Popup Carousels
             */
            $('.modal-carousel').owlCarousel({
                autoHeight: true,
                autoPlay: carouselInterval,
                lazyLoad: true,
                navigation: false,
                pagination: true,
                singleItem: true,
                stopOnHover: true,
                transitionStyle: 'backSlide'
            });
        });
});