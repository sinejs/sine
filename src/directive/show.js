import { Directive } from '../view/directive';
import { directive } from '../decorator/directive';

@directive({
    namespace: 'sine',
    selector: 'n-show'
})
class ShowDirective extends Directive{
    constructor(){
        super();
    }

    onInsert(ele, binding){
        ele.style.display = binding.compute() ? 'initial' : 'none';
    }

    onUpdate(ele, binding) {
        this.onInsert(ele, binding);
    }
}