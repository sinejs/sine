import * as utils from '../utility/utils';
import { VNodeType, VNode } from './base';

utils.inherit(CommentNode, VNode);
// comment node
function CommentNode() {
    CommentNode.super.call(this, VNodeType.comment, '#comment');
}

CommentNode.prototype.link = function () {
    return document.createComment(this.nodeValue);
};

export { CommentNode };
