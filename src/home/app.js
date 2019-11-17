import {Component} from '../view/component';
import {component} from '../decorator/component';
import {Router} from '../router/router';
import template from './app.html';
import {routes} from './routes';
import './app.css';

@component({
    namespace: 'sine.home',
    selector: 'home-app',
    template: template
})
export class AppComponent extends Component {
    constructor() {
        super();
        this.$router = new Router(routes, {
            root: location.host + location.path
        });
    }
}