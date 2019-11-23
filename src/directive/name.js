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

        var proxy = this.$scope.toProxy();

        if (this.$component != null) {
            proxy[this.name] = this.$component;
        }
        else {
            proxy[this.name] = this.$element;
        }
    }

    onDestroy() {
        if (this.name != null) {
            this.$scope[this.name] = null;
        }
    }

    setCmp(cmp) {
        var proxy = this.$scope.toProxy();
        proxy[this.name] = cmp;
    }
}