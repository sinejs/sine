import * as utils from '../utility/utils';
import { VNodeType, VNode } from './base';

class ConnectionNode extends VNode {
    constructor(name, linker){
        super(VNodeType.connection, name);
        this.linker = linker;
    }

    link(scope) {
        this.scope = scope;
        return this.linker.call(this, scope);
    }

    notifyLinked() {
        if (utils.isFunction(this.onInsert)) {
            return this.onInsert.call(this);
        }
    }

    detect() {
        if (utils.isFunction(this.onDetect)) {
            return this.onDetect.call(this);
        }
    }

    hasChange() {
        if (utils.isFunction(this.onHasChange)) {
            return this.onHasChange.call(this);
        }
    }

    update() {
        if (utils.isFunction(this.onUpdate)) {
            return this.onUpdate.call(this);
        }
    }

    destroy() {
        if (utils.isFunction(this.onDestroy)) {
            return this.onDestroy.call(this);
        }
        this.$destroy();
    }
}

export { ConnectionNode };