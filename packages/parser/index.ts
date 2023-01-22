class Token {
    type: string;
    value: string;
}

// NOTE - This is very rough and will be improved in the future
function parse(source: string) {
    let tokenizedSource = source.match(/\S+\s*/g);
    let result = "";
    
    console.log("Tokenized source")
    console.log(tokenizedSource)

    if (tokenizedSource?.length) {
        for (let i = 0; i < tokenizedSource?.length; i++) {
            console.log("Checking another token")

            // Check for SwiftUI syntax, convert to JavaScript, and add to result code
            if (tokenizedSource[i].substring(0, 6) === "HStack") {
                let node = {
                    value: "HStack",
                    targetType: "FunctionCall",
                    targetParameters: [""]
                }

                i++;

                if (tokenizedSource[i][0] !== "{") {
                    i--;
                    result += tokenizedSource[i];
                    continue;
                }

                i++;

                while (tokenizedSource[i][0] !== "}") {
                    node.targetParameters.push(tokenizedSource[i]);
                    i++;
                }

                // Done, create string and set to result
                let call = node.value + "([";

                for (let j = 0; j < node.targetParameters.length; j++) {
                    call += node.targetParameters[j];
                }

                call += "]);"
                result += call;
            } else {
                result += tokenizedSource[i];
            }
        }
    }
    
    return result;
}

export default {
    parse
}