class ListeScore extends HTMLElement{
    item;
    constructor (item) {
        super();

        this.item = item
        this.appendHtml()
        this.increasing()

    }
    appendHtml (){
        let listScore = document.getElementById('list');
        listScore.appendChild(this)
        this.tabMaker()
    }
    createEl(el){
        var tab = document.createElement(el);
        return tab;
    }
    tabMaker(){

        let data = this.increasing();
        let me = this;

        var scoreHtml  = "<table>";
		scoreHtml += "<thead>";
		scoreHtml += "<tr><th>Position</th><th>Name</th><th>Score</th></tr>";
		scoreHtml += "</thead>";
        scoreHtml += "<tbody>";
        
        $("div-list").html(scoreHtml);

        data.forEach(function(el, i) {
            let user = new User(el.name,el.score)

            scoreHtml += "<tr>";
			scoreHtml += "<td>"+ i +"</td>";
			scoreHtml += "<td>"+ user.name +"</td>";
			scoreHtml += "<td>"+ user.score +"</td>";
			scoreHtml += "</tr>";
            
            $("div-list").html(scoreHtml);
        })

        scoreHtml += "</tbody>";
        scoreHtml += "</table>";
        
        $("div-list").html(scoreHtml);

    }

    increasing(){
        var dataSort = this.item.sort((a, b) => (a.score < b.score) ? 1 : -1)
        return dataSort
    }

}
