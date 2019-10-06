import {Component} from '../../view/component';
import {component} from '../../decorator/component';
import template from './form.html';

@component({
    namespace: 'sine.ui',
    selector: 'n-form',
    template: template
})
class FormComponent extends Component{
    constructor(){
        super();
    }
}