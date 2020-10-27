function start(){
    $('#start').click(function () {
        var val = $('#pseudo').val();
        if (val != '') {
            $('#game-container').attr('style', 'visibility:visible');
            $('#game-img').attr('style', 'visibility:visible');
            $('.start-container, .bg-img').hide();    
        }else{
            $('#error').attr('style', 'visibility:visible');
        }
        console.log(val);
    });
}


start();