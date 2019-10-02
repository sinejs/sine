import { Directive } from '../view/directive';
import { directive } from '../decorator/directive';
import * as utils from '../utility';

@directive({
    namespace: 'sine',
    selector: 'n-style'
})
class StyleDirective extends Directive{
    constructor(){
        super();
    }

    onInsert(ele, binding){
        var value = binding.compute();

        if (!value) {
            ele.removeAttribute('style');
        }

        if (utils.isString(value)) {
            ele.style = value;
        }
        else if (utils.isObject(value)) {
            utils.forEach(value, function (key, value) {
                ele.style[key] = value;
            });
            binding.scope.$watch(value, /\w+/i, function () {
                utils.forEach(value, function (key, value) {
                    ele.style[key] = value;
                });
            });
        }
        else {
            throw new Error('Parameter of n-style should be string or object');
        }
    }

    onUpdate(ele, binding) {
        this.onInsert(ele, binding);
    }
}
