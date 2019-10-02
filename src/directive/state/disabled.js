import { StateDirective } from './state';
import { directive } from '../../decorator/directive';

class DisabledDirective extends StateDirective {
    constructor() {
        super('disabled');
    }
}

directive({
    namespace: 'sine',
    selector: 'n-disabled'
})(DisabledDirective);