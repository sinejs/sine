import { Directive } from "../view";
import { directive } from "../decorator";

@directive({
    namespace: 'sine',
    selector: 'n-view',
    inject: {
        $animate: '$animate'
    }
})
class ViewDirective extends Directive {
    constructor() {
        super();
        this.$priority = 5;
        this.nameDir = null;
        this.config = null;
        this.currentView = null;
        this.nextComponent = null;
        this.enterAnimation = null;
        this.leaveAnimation = null;
    }

    onInsert() {
        this.init();
        this.render();
    }

    onUpdate() {
        this.render();
    }

    onDestroy() {
        this.clear();
        this.nameDir = null;
        this.viewOptionsDir = null;
    }

    init() {
        this.nameDir = this.$element.getDirective('n-name');
        this.viewOptionsDir = this.$element.getDirective('n-view-options');

        if (this.viewOptionsDir != null) {
            this.config = this.viewOptionsDir.value;
        }
    }

    clear() {
        if (this.currentView != null) {
            this.currentView.$destroy();
        }
        this.config = null;
        this.enterAnimation && this.enterAnimation.destroy();
        this.leaveAnimation && this.leaveAnimation.destroy();
    }

    render() {
        var component = this.$binding.compute();

        if (component == null) {
            return;
        }

        if (this.currentView != null) {
            this.leave();
        }

        this.nextComponent = component;
        this.enter();
    }

    enter() {
        var self = this;

        this.enterAnimation && this.enterAnimation.destroy();

        if (this.leaveAnimation != null) {
            this.leaveAnimation.animationEnd.on(function () {
                self.doEnter();
            });
        }
        else {
            self.doEnter();
        }
    }

    doEnter() {
        var self = this;

        this.currentView = this.$binding.scope.$createChildCmp(this.nextComponent);
        this.config && this.config.onInit(this.currentView);

        this.enterAnimation = this.$animate.enter(this.$element, function () {
            self.currentView.$mount(self.$htmlElement);
            self.enterAnimation = null;
        });

        if (this.nameDir != null) {
            this.nameDir.setCmp(this.currentView);
        }
    }

    leave() {
        var self = this;

        this.leaveAnimation = this.$animate.leave(this.$element, function () {
            self.currentView.$destroy();
            self.leaveAnimation = null;
        });
    }
}