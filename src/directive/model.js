import { Directive } from '../view/directive';
import { directive } from '../decorator/directive';
import * as utils from '../utility';

class ModelDirective extends Directive {
    constructor() {
        super();
    }

    update(ele, binding, com) {
        if (com == null) {
            ele.value = binding.compute();
        }
        else {
            com.$setAttr('value', binding.compute());
        }
    }

    onInsert(ele, binding, com) {
        this.update(ele, binding, com);

        if (com == null) {
            ele.addEventListener('change', function (e) {
                binding.scope.$setAttr(binding.text, e.target.value);
            });
        }
        else {
            if (utils.isMessenger(com.change)) {
                com.change.on(function (e, args) {
                    binding.scope.$setAttr(binding.text, args.newvalue);
                });
            }
            throw new Error('Compoent ' + com.$$meta.selector + 'must define [change] event');
        }
    }

    onUpdate(ele, binding, com) {
        this.update(ele, binding, com);
    }
}

directive({
    namespace: 'sine',
    selector: 'n-model'
})(ModelDirective);