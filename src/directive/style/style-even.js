import { StyleDirective } from './style';
import { directive } from '../../decorator';

@directive({
    namespace: 'sine',
    selector: 'n-style-even'
})
class StyleEvenDirective extends StyleDirective {
    constructor() {
        super();
    }

    skip() {
        return this.$scope.$index & 1 === 1;
    }
}