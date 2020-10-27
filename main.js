function start(){
    $('#start').click(function () {
        var val = $('#pseudo').val();
        if (val != '') {
            $('#game-container').attr('style', 'visibility:visible');
            $('.start-container').hide();    
        }
        console.log(val);
    });
}


start();