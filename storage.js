const form = document.querySelector('form');
const input = document.getElementById('pseudo');
let userArray = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : [];
localStorage.setItem('user', JSON.stringify(userArray));
var data = JSON.parse(localStorage.getItem('user'));

new ListeScore(data);

form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (input.value !== '') {
        let NewUser = new User(input.value,10);
        userArray.push(NewUser);
        localStorage.setItem('user', JSON.stringify(userArray));

        var dataVal = JSON.parse(localStorage.getItem('user'));

        $('#game-container').attr('style', 'visibility:visible');
        $('#game-img').attr('style', 'visibility:visible');
        $('.start-container, .bg-img').hide();
    }else{
        $('#error').attr('style', 'visibility:visible');
    }
    $('#list').html("");
    new ListeScore(dataVal);
})




