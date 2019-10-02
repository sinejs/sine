import { VNodeType, VNode } from './base';

class CDataSectionNode extends VNode {
    constructor(){
        super(VNodeType.cdataSection);
    }
}

export { CDataSectionNode };