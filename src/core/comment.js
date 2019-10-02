import { VNodeType, VNode } from './base';

class CommentNode extends VNode {
    constructor(){
        super(VNodeType.comment, '#comment');
    }

    link() {
        return document.createComment(this.nodeValue);
    }
}

export { CommentNode };
