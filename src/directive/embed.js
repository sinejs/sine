import { Directive } from '../view/directive';
import { directive } from '../decorator/directive';

@directive({
    namespace: 'sine',
    selector: 'n-embed'
})
class EmbedDirective extends Directive {
    constructor() {
        super();
    }

    onCompile(options) {
        var embedTpl = options.getEmbedTpl();
        if (embedTpl) {
            this.$element.setInnerTpl(embedTpl);
        }
    }
}