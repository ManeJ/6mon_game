$(document).ready(function() {
    // function start() {
    //     $('#btn-start').click(function () {
    //         audioElement.play();
    //         $("#status").text("Status: Playing");
    //     });
    // }

    var song;
    function init(){
        song = document.createElement('audio');
        song.setAttribute('src', './sounds/sound2.mp3');
    } // end init

    // start();
    init();
});