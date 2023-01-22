import * as babel from '@babel/core'
import sjs from './packages/sjs'

const fileRegex = /\.(swift)$/

export default function swiftUIJS() {
  return {
    name: 'transform-file',
    enforce: "pre",

    transform(src, id) {
      if (fileRegex.test(id)) {
        console.log("Transforming Swift (UI) source file...")
        

        const result = babel.transformSync(src, {
            babelrc: false,
            ast: true,
            plugins: [sjs],
            sourceMaps: true,
            sourceFileName: id,
            configFile: false,
          });

          console.log("Result of transformation - ")
          console.log(result.code)

          return "console.log('Transormation successful.')";
      }
    },
  }
}
