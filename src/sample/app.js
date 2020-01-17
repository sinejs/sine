import {component} from '../decorator';
import {Component} from '../view';
import template from './app.html';
import html from './test.html';

@component({
    namespace: 'sine',
    selector: 'sample-app',
    template: template
})
class SampleAppComponent extends Component{
    constructor(){
        super();
        this.text = html;
    }
}