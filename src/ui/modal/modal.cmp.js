import {Component} from '../../view/component';
import {component} from '../../decorator/component';
import template from './modal.html';

@component({
    namespace: 'sine.ui',
    selector: 'n-modal',
    template: template
})
class ModalComponent extends Component {
    constructor() {
        super();
        var self = this;
        this.visible = false;
        this.currentCmp = null;
        this.cmpConfig = {
            onInit: function (view) {
                view.$close = function () {
                    self.close();
                };
            }
        };
    }

    onDestroy() {

    }

    show(cmp) {
        this.visible = true;
        this.currentCmp = cmp;
        this.$mount(document.body, {
            append: true
        });
    }

    close() {
        var self = this,
            animation = this.rootElement.getDirective('animation-modal');

        this.$proxy.visible = false;

        animation.left.on(function () {
            self.$destroy();
        });
    }
}

export { ModalComponent }