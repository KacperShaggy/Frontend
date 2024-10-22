$(document).ready(function() {
    let score = 0;

    function moveDiv() {
        const target = $('#target');
        const maxX = $(window).width() - target.width();
        const maxY = $(window).height() - target.height();

        const newX = Math.random() * maxX;
        const newY = Math.random() * maxY;

        target.animate({ left: newX, top: newY }, 1000, moveDiv);
    }

    $('#target').click(function() {
        score++;
        $('#score').text('Wynik: ' + score);
        $(this).stop(true, true); 
        moveDiv();
    });

    moveDiv();
});
