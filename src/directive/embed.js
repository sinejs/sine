import { Directive } from '../view/directive';
import { directive } from '../decorator/directive';

class EmbedDirective extends Directive {
    constructor() {
        super();
    }

    onCompile(attrNode, options) {
        var embedTpl = options.getEmbedTpl();
        if (embedTpl) {
            attrNode.ownerVElement.setInnerTpl(embedTpl);
        }
    }
}

directive({
    namespace: 'sine',
    selector: 'n-embed'
})(EmbedDirective);