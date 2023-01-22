import * as parser from "./babel-parser"

export default function SwiftUIJS() {
    console.log("Running SwiftUIJS Babel plugin!")

    return {
      parserOverride(code, opts) {
        console.log(code)
        console.log(parser)

        try {
            return parser.parse(code, opts);
        } catch {
            console.log("Parse failed")
        }

        return "//Nothing"
      },
    };
  }