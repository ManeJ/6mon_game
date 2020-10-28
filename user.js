class User {
    name;
    score;
    constructor(name, score) {
        this.name = name;
        this.score = score;
    }
    get nameScore(){
        return 'nom : ' + this.nameUser() + ';  score : '+ this.scoreUser();
    }
   nameUser() {
        return this.name;
    }
    scoreUser() {
        return this.score;
    }
}
