import { Directive } from '../view/directive';
import { directive } from '../decorator/directive';

@directive({
    namespace: 'sine',
    selector: 'n-bind'
})
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