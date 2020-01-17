import { Directive } from '../view';
import { directive } from '../decorator';

@directive({
    namespace: 'sine',
    selector: 'n-name'
})
class NameDirective extends Directive {
    constructor() {
        super();
        this.$output = true;
        this.name = null;
    }

    onInsert() {
        this.name = this.$binding.text;

        if (!this.name) {
            return;
        }

        var scope = this.$scope;

        if (this.$component != null) {
            scope.$[this.name] = this.$component;
        }
        else {
            scope.$[this.name] = this.$element;
        }
    }

    onDestroy() {
        if (this.name != null) {
            this.$scope[this.name] = null;
        }
    }

    setCmp(cmp) {
        this.$scope.$[this.name] = cmp;
    }
}