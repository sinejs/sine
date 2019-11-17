import {Component} from '../../view/component';
import {component} from '../../decorator/component';
import template from './doc.html';

@component({
    namespace: 'sine.home',
    selector: 'home-doc',
    template: template
})
export class DocComponent extends Component {
    constructor() {
        super();
    }
}