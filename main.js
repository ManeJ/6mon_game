window.customElements.define('div-touch', Touch);
var main = document.getElementById('main');

var touch1 = new Touch(1);
var touch2 = new Touch(2);
var touch3 = new Touch(3);
var touch4 = new Touch(4);

main.appendChild(touch1);
main.appendChild(touch2);
main.appendChild(touch3);
main.appendChild(touch4);


touch1.addEventListener('touchClicked', function (ev) {
    console.log(ev.detail);
});
touch2.addEventListener('touchClicked', function (ev) {
    console.log(ev.detail);
});
touch3.addEventListener('touchClicked', function (ev) {
    console.log(ev.detail);
});
touch4.addEventListener('touchClicked', function (ev) {
    console.log(ev.detail);
});