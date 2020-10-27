function start(){
    $('#start').click(function () {
        $('#game-container').attr('style', 'visibility:visible');
        $('.start-container').hide();
        var val = $('#pseudo').val();
        console.log(val);
    });
}


start();