import { StateDirective } from './state';
import { directive } from '../../decorator/directive';

@directive({
    namespace: 'sine',
    selector: 'n-selected'
})
class SelectedDirective extends StateDirective {
    constructor() {
        super('selected');
    }
}