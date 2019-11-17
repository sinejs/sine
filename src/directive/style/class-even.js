import { ClassDirective } from './class';
import { directive } from '../../decorator/directive';

@directive({
    namespace: 'sine',
    selector: 'n-class-even'
})
class ClassEvenDirective extends ClassDirective {
    constructor() {
        super();
    }

    skip() {
        return this.$scope.$index & 1 === 1;
    }
}