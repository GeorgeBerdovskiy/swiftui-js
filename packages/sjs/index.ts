import { NodeType, NodeSJS } from "./node";

// Transform raw Swift AST into nested NodeSJS tree
function generateNestedTree(nodes: [string: any][]): NodeSJS[] {
    const idMap: [number : NodeSJS] = {};
    const nestedTree: NodeSJS[] = [];

    // Create a map of nodes based on their IDs
    for (const object of nodes) {
        idMap[object.id] = new NodeSJS(NodeType.OTHER, object.text, {}, []);
    }

    // Build the nested JSON structure
    for (const object of nodes) {
        if (object.parent) {
            const parent = idMap[object.parent];
            
            if (parent) {
                parent.children.push(idMap[object.id]);
            }
        } else {
            nestedTree.push(idMap[object.id])
        }
    }

    return nestedTree;
}

// Generate HTML from nested NodeSJS tree
function generateHTML(node: NodeSJS): string {
    let html = "";
    let postHTML = "";
  
    if (node.rawType == "FunctionCallExpr" && node.children[0].rawType == "IdentifierExpr" && node.children[0].children[0].rawType == "VStack") {
      html = `<div class=\"sjs-vstack\">`;
      postHTML = "</div>"
    }
  
    if (node.rawType == "FunctionCallExpr" && node.children[0].rawType == "IdentifierExpr" && node.children[0].children[0].rawType == "HStack") {
      html = `<div class=\"sjs-hstack\">`;
      postHTML = "</div>"
    }
  
    if (node.rawType == "FunctionCallExpr" && node.children[0].rawType == "IdentifierExpr" && node.children[0].children[0].rawType == "Spacer") {
      html = `<div class=\"sjs-spacer\">`;
      postHTML = "</div>"
    }
  
    if (node.rawType == "FunctionCallExpr" && node.children[0].rawType == "IdentifierExpr" && node.children[0].children[0].rawType == "Text") {
      html = `<p>`;
      postHTML = "</p>"
    }
  
    if (node.rawType == "StringSegment") {
      html += node.children[0].rawType
    }
  
    for (let child of node["children"]) {
      html += generateHTML(child)
    }
  
    return html + postHTML;
}

// Given a raw Swift AST, generate HTML and mount on provided target element
function mount(rawTree: [string: any][], target: HTMLDivElement) {
    console.log(rawTree)

    let nestedTree = generateNestedTree(rawTree);
    let html = "";

    if (nestedTree.length >= 2) {
        html = generateHTML(nestedTree[1]);
    }

    target.innerHTML = html;
}

export { mount }