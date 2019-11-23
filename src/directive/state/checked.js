import { StateDirective } from './state';
import { directive } from '../../decorator';

@directive({
    namespace: 'sine',
    selector: 'n-checked'
})
class CheckedDirective extends StateDirective {
    constructor() {
        super('checked');
    }
}