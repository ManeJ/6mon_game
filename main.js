$(document).ready(function(){

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


	window.customElements.define('div-touch', Touch);
	var main = document.getElementById('game-img');


	var square = new Touch('square','purple');
	var triangle = new Touch('triangle','green');
	var circle = new Touch('circle','orange');
	var cross = new Touch('cross','blue');

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

	var melodyComputer = [square, circle, circle, triangle, cross, cross, square];

	document.onclick = function(){
		playMelody(melodyComputer).then(function(d){
			console.log(d);
		});
	};

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
				return playNote(note).then(() => {
					i++;
					return play(i);
				});
			}
			
			play(i);
    	});
		
	}

});