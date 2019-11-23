import { Directive } from '../../view';

class StateDirective extends Directive {
    constructor(attrName) {
        super();
        this.attrName = attrName;
    }

    onInsert() {
        this.perform();
    }

    onUpdate() {
        this.perform();
    }

    perform() {
        if (this.$binding.compute()) {
            if (!this.$htmlElement.hasAttribute(this.attrName)) {
                this.$htmlElement.setAttribute(this.attrName, '');
            }
        }
        else {
            if (this.$htmlElement.hasAttribute(this.attrName)) {
                this.$htmlElement.removeAttribute(this.attrName);
            }
        }
    }
}

export { StateDirective }