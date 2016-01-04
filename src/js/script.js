$(function() {
    $('a.about').on('click', function() {
        $.ajax({
            url: 'about.html'
        })
            .done(function(html) {
                $('.context')
                    .removeClass('hide')
                    .find('section')
                    .replaceWith(html);
                $('.navigation')
                    .addClass('hide');
            });
    });

    $('a.closeContext').on('click', function() {
        $('.context').toggleClass('hide');
        $('.navigation').toggleClass('hide');
    });
});