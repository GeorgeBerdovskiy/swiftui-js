import { UIView } from "../classes/elements";

function renderSwiftUI(elements: Array<UIView>) {
	let base = document.querySelector<HTMLDivElement>('#base')!

	renderView(base, elements);
}

function renderView(parent: HTMLElement, elements: Array<UIView>) {
	for (let element of elements) {
		if (element.children && element.children.length > 0) {
			renderView(element.render(), element.children);
			parent.append(element.render())
		} else {
			parent.append(element.render());
		}
	}
}

export default renderSwiftUI;