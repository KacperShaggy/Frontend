$(document).ready(function() {
    $('#board').click(function(event) {

        const offset = $(this).offset();
        const x = event.pageX - offset.left;
        const y = event.pageY - offset.top;

        $('#target').animate({
            left: x + 'px',
            top: y + 'px'
        }, 500); 
    });
});
