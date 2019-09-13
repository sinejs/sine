import * as utils from '../utility/utils';
import { VNodeType, VNode } from './base';

utils.inherit(DocumentTypeNode, VNode);
// document type node
function DocumentTypeNode() {
    DocumentTypeNode.super.call(this, VNodeType.documentType);
}

export { DocumentTypeNode };
