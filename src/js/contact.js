(function() {

    var form = document.querySelector('#contact-form');
    var sent = document.querySelector('#message-sent');
    var error = document.querySelector('#message-error');
    var name = document.querySelector('#name');
    var email = document.querySelector('#email');
    var phone = document.querySelector('#phone');
    var message = document.querySelector('#message');
    var xmlhttp, obj, str;

    function reset() {
        form.reset();
        $('#message-sent').removeClass('hide');
    }

    // Need to finish building this.
    //
    // function successCallback( e ) {
    //     $('#message-sent').toggle('.hide');
    // }

    // function errorCallback( e ) {
    //     $('#message-error').toggle('.hide');
    // }

    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();

        // Add Event Listeners
        // xmlhttp.addEventListener('load', successCallback);
        // xmlhttp.addEventListener('error', errorCallback);

    } else {
        return;
    }

    form.addEventListener('submit', function( e ) {
        e.preventDefault();

        str = '\nName: ' + name.value + '\nEmail: ' + email.value + '\nPhone: ' + phone.value + '\nMessage: ' + message.value;

        obj = {
            'from': 'dajoker29@gmail.com',
            'to': 'captain@zerodaedalus.net',
            'subject': 'Contact Form Response',
            'message': str
        };

        xmlhttp.open('POST', 'http://zerodaedalus.com/mailer/', true);
        xmlhttp.setRequestHeader('Content-Type', 'application/json');
        xmlhttp.send(JSON.stringify(obj));

        // Reset form
        reset();

        window.location.hash = 'sent';
    });

})();
