import { Service } from '../view/service';
import { service } from '../decorator/service';

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