class TextObject {
    value: string;
    object: HTMLElement;

	constructor(value: string) {
		this.value = value;

		// Create DOM element
		this.object = document.createElement('p');
		this.object.innerText = value;
	}

	padding(value: Number) {
		this.object.style.padding = String(value) + "px"; 

		console.log("Padding applied.");
		return this;
	}

	font(value: string) {
		this.object.style.fontFamily = value;
		return this;
	}

	render() {
		return this.object;
	}
}

export default TextObject;