import * as utils from '../utility/utils';
import { VNodeType, VNode } from './base';

utils.inherit(CustomNode, VNode);
// custom node
function CustomNode(name, linker) {
    CustomNode.super.call(this, VNodeType.custom, name);
    this.linker = linker;
}

CustomNode.prototype.link = function(scope) {
    this.scope = scope;
    return this.linker.call(this, scope);
};

CustomNode.prototype.afterLink = function() {
    if (utils.isFunction(this.onInsert)) {
        return this.onInsert.call(this);
    }
};

CustomNode.prototype.detect = function() {
    if (utils.isFunction(this.onDetect)) {
        return this.onDetect.call(this);
    }
};

CustomNode.prototype.hasChange = function() {
    if (utils.isFunction(this.onHasChange)) {
        return this.onHasChange.call(this);
    }
};

CustomNode.prototype.update = function() {
    if (utils.isFunction(this.onUpdate)) {
        return this.onUpdate.call(this);
    }
};

CustomNode.prototype.destroy = function() {
    if (utils.isFunction(this.onDestroy)) {
        return this.onDestroy.call(this);
    }
    this.$destroy();
};

export { CustomNode };