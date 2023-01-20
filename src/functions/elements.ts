import { HStackObject, TextObject, UIView } from "../classes/elements";

export function Text(value: string) {
	return new TextObject(value);
}

export function HStack(children: Array<UIView>) {
	return new HStackObject(children);
}