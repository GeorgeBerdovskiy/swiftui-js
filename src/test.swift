import HStack from "./functions/elements.ts"

function Text(content) {
    console.log(content)
}

HStack {
    Text("Hellow"),
    Text("World!!")
}

let elements = [HStack]

export default {
    elements
};