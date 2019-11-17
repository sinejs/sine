import { Animation } from '../../animation/animation';
import { directive } from '../../decorator/directive';

@directive({
    namespace: 'sine.ui',
    selector: 'animation-collapse'
})
class CollapseAnimation extends Animation {
    constructor() {
        super();
        this.initialDisplay = '';
        this.initialHeight = '';
        this.clientHeight = 0;
        this.duration = 4000;
    }

    onInsert() {
        this.initialDisplay = this.$htmlElement.style.display;
        this.initialHeight = this.$htmlElement.style.height;
    }

    beforeEnter() {
        this.$htmlElement.style.height = 1 + 'px';
        this.$htmlElement.style.transition = 'height ' + this.duration + 'ms';
    }

    enter() {
        var self = this;
        this.nextFrame(function () {
            if (self.initialHeight) {
                self.$htmlElement.style.height = self.initialHeight;
            }
            else if (self.clientHeight) {
                self.$htmlElement.style.height = self.clientHeight + 'px';
            }
            else {
                self.$htmlElement.style.height = 'initial';
            }
        });
    }

    afterEnter() {
        if (!this.initialHeight) {
            this.$htmlElement.style.height = 'initial';
        }
    }

    beforeLeave() {
        this.clientHeight = this.$htmlElement.clientHeight;
        this.$htmlElement.style.height = this.clientHeight + 'px';
    }

    leave() {
        var self = this;
        this.nextFrame(function () {
            self.$htmlElement.style.height = 0 + 'px';
        });
    }

    afterLeave() {
        this.$htmlElement.style.height = this.initialHeight;
    }
}