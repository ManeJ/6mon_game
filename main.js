window.customElements.define('div-touch', Touch);
var main = document.getElementById('main');

var square = new Touch('square','red');
var triangle = new Touch('triangle','blue');
var circle = new Touch('circle','green');
var cross = new Touch('cross','yellow');

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

document.onclick = function(){
	square.play().then(function(data){
		console.log('playdone');
		circle.play();
	});
};
