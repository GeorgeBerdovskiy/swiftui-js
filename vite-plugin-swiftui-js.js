import * as babel from '@babel/core'
import sjs from './packages/parser'

const fileRegex = /\.(swift)$/

export default function swiftUIJS() {
  return {
    name: 'transform-file',
    enforce: "pre",

    transform(src, id) {
      if (fileRegex.test(id)) {
        console.log("Transforming Swift (UI) source file...")
        

        const result = sjs.parse(src);

          console.log("Result of transformation - ")
          console.log(result)

          return result;
      }
    },
  }
}
