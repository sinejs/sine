import { StateDirective } from './state';
import { directive } from '../../decorator/directive';

@directive({
    namespace: 'sine',
    selector: 'n-readonly'
})
class ReadonlyDirective extends StateDirective {
    constructor() {
        super('readonly');
    }
}