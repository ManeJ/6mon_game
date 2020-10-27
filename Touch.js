class Touch extends HTMLElement {
	id;
	sound;
	bgColor;
	opacity = 0;
	
	
	constructor (id) {
		super();
		this.id = id;

		this.initializeAttributes();
		this.initListeners();
	}

	initializeAttributes() {

        switch(this.id) {
			case 1 : 
				this.sound = "./sounds/sound1.mp3";
				this.bgColor = "green";
				break;
			case 2 : 
				this.sound = "./sounds/sound2.mp3";
				this.bgColor = "orange";
				break;
			case 3 : 
				this.sound = "./sounds/sound3.mp3";
				this.bgColor = "blue";
				break;
			case 4 : 
				this.sound = "./sounds/sound4.mp3";
				this.bgColor = "purple";
				break;
		}
		
        this.setAttribute("id", this.id);
		this.setAttribute("style", "background-color:" + this.bgColor);

    }

	initListeners(){

        this.onclick = function() {
            var event = new CustomEvent('touchClicked', {
				detail: {
					id: this.id,
					sound: this.sound
				}
			});
			var audio = new Audio(this.sound);
            audio.play();
			this.style.opacity = 0.7;
            this.dispatchEvent(event);
        }
    }
}
