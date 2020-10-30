window.customElements.define('div-touch', Touch);
var main = document.getElementById('main');

var touch;

var square = new Touch('square','purple');
var triangle = new Touch('triangle','green');
var circle = new Touch('circle','orange');
var cross = new Touch('cross','blue');

main.appendChild(square);
main.appendChild(triangle);
main.appendChild(circle);
main.appendChild(cross);


square.addEventListener('touchClicked', function (ev) {
    console.log(ev.detail);
});
triangle.addEventListener('touchClicked', function (ev) {
    console.log(ev.detail);
});
circle.addEventListener('touchClicked', function (ev) {
    console.log(ev.detail);
});
cross.addEventListener('touchClicked', function (ev) {
    console.log(ev.detail);
});

//playRandomSounds();

document.onclick = function(){
	//touch.play().then(function(data){
		//console.log('playdone');
		playRandomSounds();
	//});
};

function playRandomSounds() {
	var random = Math.floor(Math.random()*4); //0,1,2,3

	switch (random) {
		case 0:
			touch = square;
			break;
		case 1:
			touch = triangle;
			break;
		case 2:
			touch = circle;
			break;
		case 3:
			touch = cross;
			break;
	}
	touch.play().then(function(data){
		console.log('playdone');
		playRandomSounds();
	});
}