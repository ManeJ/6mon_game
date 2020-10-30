window.customElements.define('div-list', ListeScore);
window.customElements.define('div-touch', Touch);
var main = document.getElementById('game-img');

var score = 0;
var name;

var square = new Touch('square','purple');
var triangle = new Touch('triangle','green');
var circle = new Touch('circle','orange');
var cross = new Touch('cross','blue');
var tabTouch = [ square, triangle, circle, cross ];

var melodyComputer = [];
var userMelody = [];


for (var i = 0; i < tabTouch.length; i++) {
	var key = tabTouch[i];
	main.appendChild(key);
	key.addEventListener('touchClicked', function (ev) {
		userMelody.push(ev.detail);
	    compareMelodies();
	});
}

function launchSequence() {
	touchsDisabled(true);
	setCursor("default");
	randomMelody()
	setTimeout(function() {
		playMelody(melodyComputer).then(function(d){
			console.log(d);
			touchsDisabled(false);
			setCursor("pointer");
		});
	}, 500);
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

function touchsDisabled(bool){
	tabTouch.map(function(touch){
		touch.disableClick = bool;
		console.log("fonction : " + touch.disableClick);
	});
}

function setCursor(x) {
	for (var i = 0; i < tabTouch.length; i++) {
		var key = tabTouch[i];
		key.style.cursor = x;
	}
}

function compareMelodies(){
	var userMelodySize = userMelody.length;
	var melodyComputerSize = melodyComputer.length;
	var userWin = 'false';
	for (let i = 0; i < userMelody.length; i++){
		var noteStrUser = userMelody[i];
		var noteElOrdi = melodyComputer[i];		
		if (noteStrUser === noteElOrdi.shape){
			userWin = 'en attente';
			score += 1;
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
			storage();
			score = 0;
			touchsDisabled(true);
			endGame();
			break;
		}
	}
	return userWin;
}

function randomMelody() {
	var randomNumber = Math.floor(Math.random() * 3);
	melodyComputer.push(tabTouch[randomNumber]);
}

function counter(){
    var scoreHtml = 1;
    setInterval(() => {
        $("counter").html(scoreHtml++);
    }, 1000);
}
counter();
function startGame() {
	$('#game-container').show();
    $('#game-img').attr('style', 'visibility:visible');
    $('#start-container').hide();
    $('.modal-container, .bg-img').hide();
    launchSequence();
}

function endGame() {
	$('#game-container').hide();
    $('#game-img').hide();
    $('#start-container').hide();

	var listScore = document.getElementById('list');
	$('#end-container, .bg-img').show();

	var divTabScore = document.getElementById('tabScore');
	divTabScore.appendChild(listScore);
	listScore.style.display = 'block';

}
 
//storage
const form = document.querySelector('form')
const input = document.getElementById('pseudo')
let userArray = localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user'))
    : []
localStorage.setItem('user', JSON.stringify(userArray))
var data = JSON.parse(localStorage.getItem('user'))

new ListeScore(data)

form.addEventListener('submit', function (e) {
    e.preventDefault()
    if (input.value !== '') {

        name = input.value

        startGame();

    }else{
        $('#error').attr('style', 'visibility:visible');
    }
    $('#list').html("")

})

function increasing(usersTop){
    userArray.push(usersTop)
    var dataSort = userArray.sort((a, b) => (a.score < b.score) ? 1 : -1);
    var tab = dataSort.slice(0, 10)
    return tab;
}

function storage(){
    let NewUser = new User(name,score)
    localStorage.setItem('user', JSON.stringify(increasing(NewUser)))
    var dataVal = JSON.parse(localStorage.getItem('user'))
    new ListeScore(dataVal)
}
