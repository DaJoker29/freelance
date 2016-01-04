/*
    Disable the preloader when the site is loaded
 */
$(window).load(function() {
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
});