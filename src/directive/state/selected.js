import { StateDirective } from './state';
import { directive } from '../../decorator/directive';

class SelectedDirective extends StateDirective {
    constructor() {
        super('selected');
    }
}

directive({
    namespace: 'sine',
    selector: 'n-selected'
})(SelectedDirective);