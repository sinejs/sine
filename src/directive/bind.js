import { Directive } from '../view/directive';
import { directive } from '../decorator/directive';

class BindDirective extends Directive{
    constructor(){
        super();
    }

    onInsert(ele, binding){
        ele.innerText = binding.compute();
    }

    onUpdate(ele, binding) {
        this.onInsert(ele, binding);
    }
}

directive({
    namespace: 'sine',
    selector: 'n-bind'
})(BindDirective);