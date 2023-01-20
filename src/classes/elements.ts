class UIView {
	object: HTMLElement;
	children: Array<UIView>;

	constructor(object: HTMLElement, children: Array<UIView>) {
		this.object = object;
		this.children = children;
	}

	render() {
		return this.object;
	}
}

class TextObject extends UIView {
	constructor(value: string) {
		let object = document.createElement('p');
		object.innerText = value;

		super(object, []);
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
}

class HStackObject extends UIView {
	constructor(children: Array<UIView>) {
		let object = document.createElement('div');
		object.className = "hstack";
		
		super(object, children);
	}
}

export {
	UIView,
	TextObject,
	HStackObject
}