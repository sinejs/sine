import { ClassDirective } from './class';
import { directive } from '../../decorator';

@directive({
    namespace: 'sine',
    selector: 'n-class-odd'
})
class ClassOddDirective extends ClassDirective {
    constructor() {
        super();
    }

    skip() {
        return this.$scope.$index & 1 === 0;
    }
}