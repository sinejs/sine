import {Component} from '../../view/component';
import {component} from '../../decorator/component';
import template from './main.html';

@component({
    namespace: 'sine.home',
    selector: 'home-main',
    template: template
})
export class MainComponent extends Component {
    constructor() {
        super();
    }
}