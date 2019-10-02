import { StateDirective } from './state';
import { directive } from '../../decorator/directive';

class ReadonlyDirective extends StateDirective {
    constructor() {
        super('readonly');
    }
}

directive({
    namespace: 'sine',
    selector: 'n-readonly'
})(ReadonlyDirective);