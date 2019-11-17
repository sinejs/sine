import {Component} from '../../view/component';
import {component} from '../../decorator/component';
import template from './progress.html';

@component({
    namespace: 'sine.ui',
    selector: 'n-progress',
    template: template
})
class ProgressComponent extends Component {
    get percent() {
        return Math.round(this.value * 100 / this.maxValue, 2);
    }

    get label() {
        return this.percent + '%';
    }

    constructor() {
        super();
        this.value = 0;
        this.maxValue = 100;
        this.css = {};
        this.barCss = {};
    }

    afterAttrChange(prop, value){
        if(prop === 'value'){
            this.barCss.toProxy().width = this.percent + '%';
        }
    }

    onDestroy() {

    }
}