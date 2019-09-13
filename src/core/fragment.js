import * as utils from '../utility/utils';
import { VNodeType, VNode } from './base';

utils.inherit(DocumentFragmentNode, VNode);
// document fragment node
function DocumentFragmentNode() {
    DocumentFragmentNode.super.call(this, VNodeType.documentFragment, '#document-fragment');
}

export { DocumentFragmentNode };
