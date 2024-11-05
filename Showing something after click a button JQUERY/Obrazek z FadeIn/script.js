$(document).ready(function() {

    $('#showButton').click(function() {
        $('#displayContainer').fadeIn(1000);

        $('.loading-image').fadeIn(1000);


        setTimeout(function() {
            $('.loading-image').fadeOut(1000, function() {
                $('.image-container').fadeIn(2000);
            });

            $('.message').fadeOut(1000, function() {
                $(this).text('TO JEST: Thepatitis Viruses Overview: HAV, HBV, HCV, HDV, HEV- CUSABIO').fadeIn(1000);
            });
        }, 3000);

        $('body').animate({ backgroundColor: '#ecf0f1' }, 2000);
    });
});