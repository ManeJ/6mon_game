class ListeScore extends HTMLElement{
    item;
    constructor (item) {
        super();

        this.item = item;
        this.appendHtml();
        this.increasing();

    }
    appendHtml (){
        let listScore = document.getElementById('list');
        listScore.appendChild(this)
        this.liMaker()
    }
    liMaker(){

        let data = this.increasing();
        let me = this;

        data.forEach((i) => {
            const li = document.createElement('li');
            let user = new User(i.name,i.score);
            li.textContent = user.nameScore;
            me.appendChild(li);
        })

    }
    increasing(){
        var dataSort = this.item.sort((a, b) => (a.score < b.score) ? 1 : -1);
        return dataSort;
    }

}
