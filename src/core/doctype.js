import { VNodeType, VNode } from './base';

class DocumentTypeNode extends VNode {
    constructor() {
        super(VNodeType.documentType);
    }
}

export { DocumentTypeNode };
