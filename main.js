function start(){
    $('#start').click(function () {
        var val = $('#pseudo').val();
        if (val != '') {
            $('#game-container').attr('style', 'visibility:visible');
            //$('#game-img').attr('style', 'visibility:visible');
            $('.start-container, .bg-img').hide();
            var userName = document.getElementById('userName');
            userName.appendChild();  
        }else{
            $('#error').attr('style', 'visibility:visible');
        }
        console.log(val);
    });
}
start();

function endGame(){
    $('#modal-btn').click(function () {
        $('.modal-trial, .bg-img').attr('style', 'visibility:visible');
        $('#modal-btn, .start-container').hide();
        console.log('clicked');
    });
}
endGame();

window.customElements.define('div-list', ListeScore);
window.customElements.define('div-touch', Touch);
var main = document.getElementById('game-img');


var square = new Touch('square','purple');
var triangle = new Touch('triangle','green');
var circle = new Touch('circle','orange');
var cross = new Touch('cross','blue');
var tabTouch = [ square, triangle, circle, cross ];

var melodyComputer = [];
var userMelody = [];

var userWin = 'false';

for (var i = 0; i < tabTouch.length; i++) {
	var key = tabTouch[i];
	main.appendChild(key);
	key.addEventListener('touchClicked', function (ev) {
		userMelody.push(ev.detail);
	    compareMelodies();
	});
}


function launchSequence() {
	randomMelody()
	setTimeout(function() {
		playMelody(melodyComputer).then(function(d){
			console.log(d);
		});
	}, 2000);
	
}

function playNote(note) {
	return note.play();
}

function playMelody(melody){
	return new Promise(function(resolve, reject){
		
		var i = 0;
		
		function play(i) {
			var note = melody[i];
			if (!note) {
				return resolve('Melody ended');
			}
			return playNote(note).then(function () {
				i++;
				return play(i);
			});
		}
		
		play(i);
	});
}

function compareMelodies(){
	var userMelodySize = userMelody.length;
	var melodyComputerSize = melodyComputer.length;
	for (let i = 0; i < userMelody.length; i++){
		var noteStrUser = userMelody[i];
		var noteElOrdi = melodyComputer[i];		
		if (noteStrUser === noteElOrdi.shape){
			userWin = 'en attente'
			if (
				(userMelodySize == melodyComputerSize) && 
				(i == melodyComputerSize - 1)){
				userWin = 'true';
				userMelody = [];
				launchSequence();
			}
		}else {
			userWin = 'false';
			userMelody = [];
			melodyComputer = [];
			//alert("You failed !");
			//launchSequence();
			break;
		}
	}
	return userWin;
}

function randomMelody() {
	var randomNumber = Math.floor(Math.random() * 3);
	melodyComputer.push(tabTouch[randomNumber]);
}
 
