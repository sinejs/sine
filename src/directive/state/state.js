import { Directive } from '../../view/directive';

class StateDirective extends Directive{
    constructor(attrName){
        super();
        this.attrName = attrName;
    }

    onInsert(ele, binding){
        if (binding.compute()) {
            if (!ele.hasAttribute(this.attrName)) {
                ele.setAttribute(this.attrName, '');
            }
        }
        else {
            if (ele.hasAttribute(this.attrName)) {
                ele.removeAttribute(this.attrName);
            }
        }
    }

    onUpdate(ele, binding) {
        this.onInsert(ele, binding);
    }
}

export { StateDirective }