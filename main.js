window.customElements.define('div-list', ListeScore);
window.customElements.define('div-touch', Touch);
var main = document.getElementById('game-img');


var square = new Touch('square','purple');
var triangle = new Touch('triangle','green');
var circle = new Touch('circle','orange');
var cross = new Touch('cross','blue');
//var tabTouch = [ square ];

main.appendChild(square);
main.appendChild(triangle);
main.appendChild(circle);
main.appendChild(cross);

square.addEventListener('touchClicked', function (ev) {
    //console.log(ev.detail);
});
triangle.addEventListener('touchClicked', function (ev) {
    //console.log(ev.detail);
});
circle.addEventListener('touchClicked', function (ev) {
    //console.log(ev.detail);
});
cross.addEventListener('touchClicked', function (ev) {
    //console.log(ev.detail);
});

//var melodyComputer = [square, circle, circle, triangle, cross, cross, square];
var melodyComputer = [square, circle];

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

/* test vérification
function getPlayerClick(element) {
	var melodyPlayer = [];
	element.addEventListener('touchClicked', function (ev) {
	    console.log(ev.detail.id);
	});
	return melodyPlayer;
}*/