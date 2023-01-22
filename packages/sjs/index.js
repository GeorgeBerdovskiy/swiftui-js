import * as parser from "./babel-parser"

export default function SwiftUIJS() {
    console.log("Running SwiftUIJS Babel plugin!")

    return {
      parserOverride(code, opts) {
        console.log(code)
        console.log(parser)

        return parser.parse(code, opts);
      },
    };
  }