import { VNodeType, VNode } from './base';

class DocumentNode extends VNode {
    constructor() {
        super(VNodeType.document);
    }
}

export { DocumentNode };