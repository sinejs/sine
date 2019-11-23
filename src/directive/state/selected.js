import { StateDirective } from './state';
import { directive } from '../../decorator';

@directive({
    namespace: 'sine',
    selector: 'n-selected'
})
class SelectedDirective extends StateDirective {
    constructor() {
        super('selected');
    }
}