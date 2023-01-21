import { Text, HStack } from "./functions/elements"
import { UIView } from "./classes/elements"

import "./test.swift";

import './assets/style.css'

let base = document.querySelector<HTMLDivElement>('#base')!

let elements = [
	Text("Hello...")
		.padding(32)
		.font("Arial"),

    Text("World!")
		.padding(32)
		.font("Phosphate"),

	HStack([
		Text("Inside!")
			.padding(32)
			.font("Phosphate")
	])
]

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

let n = "Hello World";
console.log(n);

renderView(base, elements);
