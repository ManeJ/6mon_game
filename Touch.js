class Touch extends HTMLElement {
	shape;
	color;

	constructor (shape, color) {
		super();
		this.shape = shape;
		this.color = color;
		this.sound = "./sounds/sound_"+shape+".mp3";

		this.initializeAttributes();
		this.initListeners();

		this.audioEl = new Audio();
		this.audioEl.src = this.sound;
		this.audioEl.style.display = "none";
		this.appendChild(this.audioEl);
	}

	initializeAttributes() {
        this.setAttribute("id", this.shape);
		this.style.backgroundColor= this.color;
		this.style.borderRadius = "50%";
    }

	initListeners(){
		let me = this;
        this.onclick = function() {
            me.play();
        }
    }

    play() {
    	let me = this;
    	return new Promise(function(resolve, reject){
			me.style.opacity = 0.7;
    		me.audioEl.play();
			me.audioEl.onended = function(){
				me.stop();
				resolve(me.shape);
			}	
    	});
    }

    stop(){
    	this.style.opacity = 0;
    	var event = new CustomEvent('touchClicked', {
				detail: {
					id: this.shape
				}
			});
    	this.dispatchEvent(event);
    }
}
