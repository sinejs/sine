import { Directive } from "../view";
import { directive } from "../decorator";

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
        this.init();
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

    init() {
        this.nameDir = this.$element.getDirective('n-name');
        this.bindCmpOptionsDir = this.$element.getDirective('n-bind-cmp-options');

        if (this.bindCmpOptionsDir != null) {
            this.config = this.bindCmpOptionsDir.value;
        }
        else {
            this.config = {};
        }
    }

    clear() {
        if (this.view != null) {
            this.view.$destroy();
        }
        this.config = null;
    }

    render() {
        var component = this.$binding.compute();

        if (component == null) {
            return;
        }

        this.view = this.$binding.scope.$createChildCmp(component);
        this.config && this.config.onInit(this.view);
        this.view.$mount(this.$htmlElement);

        if (this.nameDir != null) {
            this.nameDir.setCmp(this.view);
        }
    }
}