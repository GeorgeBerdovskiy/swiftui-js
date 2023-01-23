// Types for our AST - https://github.com/SwiftDocOrg/SwiftSemantics/tree/dd2786c71793fb0a1a01dc9bbf16549be2bdd3ef/Sources/SwiftSemantics/Declarations
enum DeclarationTypes {
    StructureDeclaration, // Swift 'struct'
    FunctionDeclaration   // Swift function declaration
}

enum ExpressionTypes {
    FunctionCall // Swift function call (example - 'HStack { ... }')
}

export default {
    DeclarationTypes,
    ExpressionTypes
};