enum NodeType {
    CONTAINER,
    SPACER,
    TEXT,
    RAW_VALUE,
    OTHER
}

class NodeSJS {
    type: NodeType;
    rawType: string;
    attributes: { [key: string]: string };
    children: NodeSJS[];
    value?: string;

    constructor(type: NodeType, rawType: string, attributes: { [key: string]: string }, children: NodeSJS[], value?: string) {
        this.type = type;
        this.rawType = rawType;
        this.attributes = attributes;
        this.children = children;
        
        if (value != null) {
            this.value = value;
        }
    }

    getOpenTagHTML(): string {
        switch (this.type) {
            case NodeType.CONTAINER:
            return "<div";
            case NodeType.TEXT:
            return "<p";
            default:
            return "";
        }
    }
    
    getCloseTagHTML(): string {
        switch (this.type) {
            case NodeType.CONTAINER:
            return "</div>";
            case NodeType.TEXT:
            return "</p>";
            default:
            return "";
        }
    }
}

export { NodeType, NodeSJS }