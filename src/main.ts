import { Text } from "./functions/elements"

let base = document.querySelector<HTMLDivElement>('#base')!

let elements = [
	Text("Hello...")
		.padding(32)
		.font("Arial"),

    Text("World!")
		.padding(32)
		.font("Phosphate"),
]

for (let element of elements) {
    base.append(element.render());
}