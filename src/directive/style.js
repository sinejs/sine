import { Directive } from '../view/directive';
import { directive } from '../decorator/directive';
import * as utils from '../utility';

@directive({
    namespace: 'sine',
    selector: 'n-style'
})
class StyleDirective extends Directive {
    constructor() {
        super();
    }

    onInsert() {
        this.setStyle();
    }

    onUpdate() {
        this.setStyle();
    }

    setStyle() {
        var self = this;
        var value = this.$binding.compute();

        if (!value) {
            this.$htmlElement.removeAttribute('style');
        }

        if (utils.isString(value)) {
            this.$htmlElement.style = value;
        }
        else if (utils.isObject(value)) {
            utils.forEach(value, function (key, value) {
                self.$htmlElement.style[key] = value;
            });
            this.$binding.scope.$watch(value, '*', function () {
                utils.forEach(value, function (key, value) {
                    self.$htmlElement.style[key] = value;
                });
            });
        }
        else {
            throw new Error('Parameter of n-style should be string or object');
        }
    }
}
