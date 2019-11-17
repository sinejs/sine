import { Service } from '../../view/service';
import { service } from '../../decorator/service';
import { ModalComponent } from './modal.cmp';

@service({
    namespace: 'sine.ui',
    selector: 'modalService'
})
class ModalService extends Service {
    constructor() {
        super();
    }

    show(content) {
        new ModalComponent().show(content);
    }
}