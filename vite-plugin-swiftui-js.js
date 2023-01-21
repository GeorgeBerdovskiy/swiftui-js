const fileRegex = /\.(swift)$/

export default function swiftUIJS() {
  return {
    name: 'transform-file',
    enforce: "pre",

    transform(src, id) {
      if (fileRegex.test(id)) {
        console.log("Transforming Swift (UI) source file...")
        return "console.log('Transormation successful.')";
      }
    },
  }
}
