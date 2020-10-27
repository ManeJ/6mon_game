class Touch extends HTMLElement {
	id = 0;
	sound;
	bgColor;
	opacity=0;
	
	
	constructor (id) {
		super();
		this.id = id+1;

		this.initializeAttributes();
		this.initListeners();
	}

	initializeAttributes() {

        switch(this.id) {
			case 1 : 
				sound = "./sounds/sound1.mp3";
				bgColor = "green";
			case 2 : 
				sound = "./sounds/sound2.mp3";
				bgColor = "orange";
			case 3 : 
				sound = "./sounds/sound3.mp3";
				bgColor = "blue";
			case 4 : 
				sound = "./sounds/sound4.mp3";
				bgColor = "purple";
		}

        this.setAttribute("style", "opacity:0;");
		this.setAttribute("style", "background-color:" + bgColor);

    }

	initListeners(){

        this.onclick = function() {
            var event = new CustomEvent('touchClicked', {
				detail: {
					id: this.id,
					sound: this.sound
				}
			});
			this.setAttribute("style", "opacity:0.7;");
            this.dispatchEvent(event);
        }
    }
}
window.customElements.define('touch', Touch);