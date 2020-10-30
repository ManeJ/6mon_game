window.customElements.define('div-list', ListeScore);
window.customElements.define('div-touch', Touch);
var main = document.getElementById('game-img');


var square = new Touch('square','purple');
var triangle = new Touch('triangle','green');
var circle = new Touch('circle','orange');
var cross = new Touch('cross','blue');
var tabTouch = [ square, triangle, circle, cross ];


//var melodyComputer = [square, circle, circle, triangle, cross, cross, square];
var melodyComputer = [square, circle];
var userMelody = [];

for (var i = 0; i < tabTouch.length; i++) {
	var key = tabTouch[i];
	main.appendChild(key);
	key.addEventListener('touchClicked', function (ev) {
		userMelody.push(ev.detail);
	    compareMelodies()
	});
}

function launchSequence() {
	setTimeout(function() {
		playMelody(melodyComputer).then(function(d){
			console.log(d);
			// for 
			//getPlayerClick(element);
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
	var userWin = 'false';
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
			//alert("You failed !");
			break;
		}
	}
	return userWin;
}