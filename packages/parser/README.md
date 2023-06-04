# SwiftUI JS Parser
## Introduction
Although our final goal is complete SwiftUI integration, we're currently using what we call **hybrid integration**. This refers to the integration of __some__ SwiftUI views and syntax in combination with JavaScript and TypeScript. This is done through our simple SwiftUI parser. Note that we don't transpile Swift to JavaScript - rather, we transpile SwiftUI views to equivalent functions and objects we've written in TypeScript.

## How It Works
When running `vite`, our plugin will parse every file with the `.sjs` extension. The parser will convert all the views you've listed in the exported array into their respective TypeScript functions or objects and return the resulting code.

### Input
```swift
import { HStack, Text } from "./functions/elements";

let Home = [
    // SwiftUI elements
    HStack(alignment: "leading") {
        Text("Home")
    }

    Text("You're looking at a page written in SwiftUI.")
]

export default Home;
```

### Syntax Tree
```
{
	"type": "Base",
	"children": [
		{
			"type": "ViewWithChildren",
			"name": "HStack",
			"parameters": {
				"alignment": "leading"
			},
			"children": [
				{
					"type": "ViewWithNoChildren",
					"name": "Text",
					"parameters": {
						"content": "Home"
					}
				}
			]
		},
        {
            "type": "ViewWithNoChildren",
            "name": "Text",
            "parameters": {
                "content": "You're looking at a page written in SwiftUI."
            }
        }
	]
}
```


### Output
```js
import { HStack, Text } from "./functions/elements";

let Home = [
    // SwiftUI elements
    HStack([Text("Home")]),
    Text("You're looking at a page written in SwiftUI."),
]

export default Home;
```