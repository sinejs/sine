import { Directive } from '../view/directive';
import { directive } from '../decorator/directive';

class HideDirective extends Directive{
    constructor(){
        super();
    }

    onInsert(ele, binding){
        ele.style.display = binding.compute() ? 'none' : 'initial';
    }

    onUpdate(ele, binding) {
        this.onInsert(ele, binding);
    }
}

directive({
    namespace: 'sine',
    selector: 'n-hide'
})(HideDirective);