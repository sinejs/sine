import { StyleDirective } from './style';
import { directive } from '../../decorator/directive';

@directive({
    namespace: 'sine',
    selector: 'n-style-odd'
})
class StyleOddDirective extends StyleDirective {
    constructor() {
        super();
    }

    skip() {
        return this.$scope.$index & 1 === 0;
    }
}