import { StateDirective } from './state';
import { directive } from '../../decorator/directive';

class CheckedDirective extends StateDirective {
    constructor() {
        super('checked');
    }
}

directive({
    namespace: 'sine',
    selector: 'n-checked'
})(CheckedDirective);