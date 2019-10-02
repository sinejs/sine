import { VNodeType, VNode } from './base';

class DocumentFragmentNode extends VNode {
    constructor(){
        super(VNodeType.documentFragment, '#document-fragment');
    }
}

export { DocumentFragmentNode };
