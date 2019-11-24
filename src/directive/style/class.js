import * as utils from '../../utility';
import { Directive } from '../../view';
import { directive } from '../../decorator';

@directive({
    namespace: 'sine',
    selector: 'n-class'
})
class ClassDirective extends Directive {
    constructor() {
        super();
        this.unwatch = null;
        this.initialClassList = [];
    }

    onInsert() {
        this.parseClass();
        this.setClass();
    }

    onUpdate() {
        this.setClass();
    }

    watchArray(arr, action) {
        var self = this;

        this.unwatchArray();
        this.$scope.$watch(arr, 'length', function () {
            action.call(self);
        })
    }

    unwatchArray() {
        if (this.unwatch != null) {
            this.unwatch.call(this);
            this.unwatch = null;
        }
    }

    onDestroy() {
        this.unwatchArray();
    }

    textToArray(text) {
        return text.split(' ').filter(function (item) {
            return item.trim().length > 0;
        });
    }

    parseClass() {
        var classText = this.$getAttrValue('class');

        if (!classText) {
            return;
        }

        this.initialClassList = this.textToArray(classText);
    }

    setClassList(arr) {
        var self = this;

        this.$htmlElement.classList.forEach(function (item) {
            self.$htmlElement.classList.remove(item);
        });
        this.initialClassList.forEach(function (item) {
            self.$htmlElement.classList.add(item);
        });
        arr.forEach(function (item) {
            self.$htmlElement.classList.add(item);
        });
    }

    setClass() {
        if (this.skip()) {
            return;
        }

        var self = this,
            newArr = [],
            value = this.$binding.compute();

        if (value != null) {
            if (utils.isString(value)) {
                newArr = this.textToArray(value);
            }
            else if (utils.isArray(value)) {
                newArr = value;
                this.watchArray(value, function () {
                    self.setClassList(value);
                });
            }
            else {
                throw new Error('Parameter of n-class should be string or array');
            }
        }

        this.setClassList(newArr);
    }

    skip() {
        return false;
    }
}

export { ClassDirective }
