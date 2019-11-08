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
        this.visible = false;
        this.viewConfig = null;
    }

    onDestroy() {

    }

    show(cmp) {
        var self = this;

        this.visible = true;
        this.viewConfig = {
            component: cmp,
            onInit: function (view) {
                view.$close = function () {
                    self.close();
                };
            }
        };
        this.$mount(document.body, {
            append: true
        });
    }

    close() {
        var self = this,
            modalShow = this.rootElement.getDirective('n-modal-fade');

        this.$proxy.visible = false;

        modalShow.unload.on(function () {
            self.$destroy();
        });
    }
}

export { ModalComponent }