    window.customElements.define('div-list', ListeScore);
    window.customElements.define('div-touch', Touch);

    var main = document.getElementById('main');
    var main = document.getElementById('game-img');
    var start = document.getElementById('start');
    
    var square = new Touch('square','#D095D0');
    var triangle = new Touch('triangle','#99D899');
    var circle = new Touch('circle','#CE9392');
    var cross = new Touch('cross','#8DC5C6');

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

    start.onclick = function(){
    		playRandomSounds();
    }

    var songs = [square, triangle, circle, cross];
    var randomSongs = [];

    function playRandomSounds(touchSongs) {
        var song = songs[Math.floor(Math.random() * songs.length)];
        song.play().then(function(data){
            playRandomSounds();
            return song;
        });
        randomSongs.push(song);
        console.log(randomSongs);   
    };
    

    function playTouch(touch) {
        return touch.playAudio();	
    }
    function playMelodie(melody){
        return new Promise(function(resolve, reject){
            var i = 0;				
            function playByloop(e){
                var note = melody[e];
                if (!note){
                    return resolve('TOUTE LA MELODIE EST JOUEE');
                }
                return playTouch(note).then( function(){
                    e++;
                    return playByloop(e);
                });
            }
            playByloop(i);
        });
    }
    playMelodie(randomSongs).then(function(data){ // remplacer ordiMelodie par tableau de random
        console.log(data);
    });


// GESTION DU SCORE
// 
// function createScore(){
// 	var score = [
// 		{ nom : '___', valeur: '000'},
// 		{ nom : '___', valeur: '000'},
// 		{ nom : '___', valeur: '000'},
// 		{ nom : '___', valeur: '000'},
// 		{ nom : '___', valeur: '000'},
// 		{ nom : '___', valeur: '000'},
// 		{ nom : '___', valeur: '000'},
// 		{ nom : '___', valeur: '000'},
// 		{ nom : '___', valeur: '000'},
// 		{ nom : '___', valeur: '000'}
// 	];
// 	return score;
// }
// function getScoreFromLs() {
// 	var scoreStr = localStorage.getItem('simon-score');
// 	score = JSON.parse(scoreStr);
// 	if (!score){
// 		score = createScore();
// 	}
// 	return score;
// }
// function saveTabScoreInLs(tabScore) {
// 	localStorage.setItem('simon-score', JSON.stringify(tabScore));
// }
// function composeHtmlScore(tabScore){
// 	var scoreHtml  = "<table>";
// 		scoreHtml += "<thead>";
// 		scoreHtml += "<tr><th>Position</th><th>Name</th><th>Score</th></tr>";
// 		scoreHtml += "</thead>";
// 		scoreHtml += "<tbody>";
// 		for (let i = 0; i < tabScore.length; i++) {
// 			scoreHtml += "<tr>";
// 			scoreHtml += "<td>"+ parseInt(i+1, 10) +"</td>";
// 			scoreHtml += "<td>"+ tabScore[i].nom +"</td>";
// 			scoreHtml += "<td>"+ tabScore[i].valeur +"</td>";
// 			scoreHtml += "</tr>";
// 		}
// 		scoreHtml += "</tbody>";
// 		scoreHtml += "</table>";
// 	return scoreHtml;	
// }
// function afficheScore(tabScore){
// 	var scoreHtml = composeHtmlScore(tabScore);
// 	$(".score").html(scoreHtml);
// }
// afficheScore(getScoreFromLs());
// var scoreJoueur = { nom: 'JBs', valeur : 131 };
// function sortTabScore(tabScore) {
// 	var tabScoreOrdonned = tabScore.sort(function(a, b){
// 		var va = a.valeur;
// 		var vb = b.valeur;
// 		if ( va > vb ) return -1;
// 		if ( vb >= va ) return 1;
// 	});
// 	return tabScoreOrdonned;
// }
// function getOnly10(tabScore){
// 	return tabScore.splice(0, 10);
// }
// function putScoreInTabScore( newScore ){
//  var tabScore = getScoreFromLs();
// 	tabScore.push(newScore);
// 	tabScore = sortTabScore(tabScore);
// 	tabScore = getOnly10(tabScore);
// 	saveTabScoreInLs(tabScore);
// 	afficheScore(tabScore);
// }
// putScoreInTabScore(scoreJoueur);