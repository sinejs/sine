import * as utils from '../utility/utils';
import { VNodeType, VNode } from './base';

utils.inherit(DocumentNode, VNode);
// document node
function DocumentNode() {
    DocumentNode.super.call(this, VNodeType.document);
}

export { DocumentNode };