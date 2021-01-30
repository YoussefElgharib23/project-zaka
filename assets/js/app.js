$('input#inputFrom').on('keyup', function () {
    console.log($(this).val())
    if ( $(this).val().trim() !== '' )
        $('input').attr('dir', 'ltr');
    else
        $('input').attr('dir', 'rtl');
})

window.addEventListener('scroll', function() {
    var elements = document.querySelectorAll('.__fade');

    elements.forEach(function (element) {
        var position = element.getBoundingClientRect();

        // checking for partial visibility
        if(position.top < window.innerHeight && position.bottom >= 0) {
            element.classList.add('__show');
        }
    })

});