class Touch extends HTMLElement {
	id = 0;
	sound;
	image;
	
	
	constructor (id, sound, image) {
		this.id = id+1;

		switch(id) {
			case 1 : 
				sound = "./sounds/sound1.mp3";
				image = ;
			case 2 : 
				sound = "./sounds/sound2.mp3";
				image = ;
			case 3 : 
				sound = "./sounds/sound3.mp3";
				image = ;
			case 4 : 
				sound = "./sounds/sound4.mp3";
				image = ;
		}

		this.initListeners();
	}

	initListeners(){
        this.onclick = function() {
            this.show();
            var event = new CustomEvent('touchClicked', ...);

            this.dispatchEvent(event);
        }
    }
}
window.customElements.define('touch', Touch);