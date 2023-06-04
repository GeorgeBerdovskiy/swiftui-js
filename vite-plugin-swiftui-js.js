const fileRegex = /\.(swift)$/
import {exec} from 'child_process'

async function executeCommand(command) {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        reject(error);
        return;
      }

      resolve(stdout);
    });
  });
}

export default function swiftUIJS() {
  return {
    name: 'transform-file',
    enforce: "pre",

    async transform(src, id) {
      console.log("Trans - " + id)

      if (fileRegex.test(id)) {
        console.log("Transforming Swift (UI) source file...")

        const lastSlashIndex = id.lastIndexOf("/");
        const substring = id.substring(lastSlashIndex + 1);

        let command = `./TreeExplorer ./src/${substring}`
        console.log(command)

        let result = await executeCommand(command);

        return `let main = ${ result }; export { main };`;

        /*exec(command, (err, stdout, stderr) => {
          if (err) {
            console.log("An error co")
            return;
          }

          console.log(stdout)
          console.log(stderr)

          //return `let main = ${ stdout }; export { main };`;
          return `console.log("Hello world")`
        });*/
      }
    },
  }
}
