/*
    Disable the preloader when the site is loaded
 */
$(window).load(function() {
    var time = 350;
    $('#status').fadeOut();
    $('#preloader').delay(time).fadeOut('slow');

    // Stagger Display
    $('.content > section').delay(time).each(function( index, element) {
        $(this).delay(time * index).fadeIn('slow').animate({'left': 0, 'width': '100%', 'opacity': 1});
    });
});