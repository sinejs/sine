import * as utils from '../utility/utils';
import { VNodeType, VNode } from './base';

utils.inherit(CDataSectionNode, VNode);
// CDataSection node
function CDataSectionNode() {
    CDataSectionNode.super.call(this, VNodeType.cdataSection);
}

export { CDataSectionNode };