import { StateDirective } from './state';
import { directive } from '../../decorator/directive';

@directive({
    namespace: 'sine',
    selector: 'n-disabled'
})
class DisabledDirective extends StateDirective {
    constructor() {
        super('disabled');
    }
}