import { Component } from '../../view/component';
import { component } from '../../decorator/component';
import template from './nav-bar.html';

@component({
    namespace: 'sine.ui',
    selector: 'n-nav-bar',
    template: template
})
class FormComponent extends Component {
    constructor() {
        super();
    }

    toggle() {
        var ele = this.collapse.htmlElement;

        if (ele.classList.contains('show')) {
            ele.classList.remove('show');
        }
        else {
            ele.classList.add('show');
        }
    }
}