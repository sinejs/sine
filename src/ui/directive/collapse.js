import { Directive } from "../../view/directive";
import { directive } from "../../decorator/directive";

@directive({
    namespace: 'sine.ui',
    selector: 'n-collapse'
})
class CollapseDirective extends Directive {
    constructor() {
        super();
        this.loaded = false;
        this.duration = 400;
        this.height = '';
        this.display = '';
        this.timeoutId = null;
    }

    onLoad(ele, binding) {
        this.loaded = true;
        this.height = ele.clientHeight;
        this.display = ele.style.display;

        ele.style.overflow = 'hidden';
        ele.style.transition = 'height ' + this.duration + 'ms';

        if (binding.compute()) {
            ele.style.display = 'none';
            ele.style.height = 0 + 'px';
        }
        else {
            ele.style.height = this.height + 'px';
        }
    }

    onUpdate(ele, binding) {
        if (!this.loaded) {
            return;
        }

        if (binding.compute()) {
            this.hide(ele);
        }
        else {
            this.show(ele);
        }
    }

    hide(ele) {
        ele.style.height = 0 + 'px';

        this.cancelTimeout();

        this.timeoutId = setTimeout(function () {
            ele.style.display = 'none';
            this.timeoutId = null;
        }, this.duration - 20);
    }

    show(ele) {
        var height = this.height;

        ele.style.display = this.display;

        this.cancelTimeout();

        this.timeoutId = setTimeout(function () {
            ele.style.height = height + 'px';
            this.timeoutId = null;
        });
    }

    cancelTimeout() {
        if (this.timeoutId != null) {
            clearTimeout(this.timeoutId);
            this.timeoutId = null;
        }
    }

    onDestroy() {
        this.cancelTimeout();
    }
}