import { Service } from '../view';
import { service } from '../decorator';

@service({
    namespace: 'sine',
    selector: '$modelOptions'
})
class ModelOptionsService extends Service {
    constructor() {
        super();
        this.cssClass = {
            pristine: 'n-pristine',
            dirty: 'n-dirty',
            valid: 'n-valid',
            invalid: 'n-invalid'
        };
    }
}