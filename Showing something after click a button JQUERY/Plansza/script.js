$(document).ready(function() {
    $('#generateButton').click(function() {

        $('#container').empty();


        var numCols = Math.floor($(window).width() / 100);
        var numRows = Math.floor($(window).height() / 100); 

        for (var i = 0; i < numRows; i++) {
            for (var j = 0; j < numCols; j++) {
                var cell = $('<div class="cell"></div>');
                $('#container').append(cell);
            }
        }
    });
});