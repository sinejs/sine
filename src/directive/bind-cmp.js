import { Directive } from "../view/directive";
import { directive } from "../decorator/directive";
import * as utils from '../utility/utils';

@directive({
    namespace: 'sine',
    selector: 'n-bind-cmp'
})
class BindCmpDirective extends Directive {
    constructor() {
        super();
        this.$priority = 5;
        this.nameDir = null;
        this.config = null;
        this.view = null;
    }

    onInsert() {
        this.nameDir = this.$element.getDirective('n-name');
        this.render();
    }

    onUpdate() {
        this.clear();
        this.render();
    }

    onDestroy() {
        this.clear();
        this.nameDir = null;
    }

    clear() {
        if (this.view != null) {
            this.view.$destroy();
        }
        this.config = null;
    }

    render() {
        this.config = this.$binding.compute();

        if(utils.isObject(this.config)) {
            this.view = this.$binding.scope.$createChildCmp(this.config.component);

            if(this.config.onInit != null) {
                this.config.onInit.call(this, this.view);
            }
        }
        else{
            this.view = this.$binding.scope.$createChildCmp(this.config);
        }

        this.view.$mount(this.$htmlElement);

        if (this.nameDir != null) {
            this.nameDir.setCmp(this.view);
        }
    }
}