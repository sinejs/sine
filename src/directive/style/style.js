import { Directive } from '../../view/directive';
import { directive } from '../../decorator/directive';
import * as utils from '../../utility';

@directive({
    namespace: 'sine',
    selector: 'n-style'
})
class StyleDirective extends Directive {
    constructor() {
        super();
        this.unwatch = null;
        this.initialStyle = {};
    }

    onInsert() {
        this.parseStyle();
        this.setStyle();
    }

    onUpdate() {
        this.setStyle();
    }

    onDestroy() {
        this.unwatchObj();
    }

    watchObj(obj, action) {
        var self = this;

        this.unwatchObj();
        this.$scope.$watch(obj, '*', function () {
            action.call(self);
        })
    }

    unwatchObj() {
        if (this.unwatch != null) {
            this.unwatch.call(this);
            this.unwatch = null;
        }
    }

    parseStyle() {
        var value = this.$getAttrValue('style');

        if (!value) {
            return;
        }

        this.initialStyle = this.textToObject(value);
    }

    textToObject(text) {
        var obj = {},
            list = text.split(';').filter(function (item) {
                return item.trim().length > 0;
            });

        list.forEach(function (item) {
            var subItems = item.split(':');
            var name = subItems[0];
            var value = subItems[1];
            obj[name] = value;
        });

        return obj;
    }

    applyStyle(obj) {
        var element = this.$htmlElement;

        // clean up style
        element.style = '';

        // set new style
        utils.forEach(this.initialStyle, function (value, key) {
            element.style[key] = value;
        });
        utils.forEach(obj, function (value, key) {
            element.style[key] = value;
        });
    }

    setStyle() {
        if (this.skip()) {
            return;
        }

        var self = this, newStyle = {};
        var value = this.$binding.compute();

        if (value != null) {
            if (utils.isString(value)) {
                newStyle = this.textToObject(value);
            }
            else if (utils.isObject(value)) {
                newStyle = value;
                this.watchObj(value, function () {
                    self.applyStyle(value);
                });
            }
            else {
                throw new Error('Parameter of n-style should be string or object');
            }
        }

        this.applyStyle(newStyle);
    }

    skip() {
        return false;
    }
}

export { StyleDirective }
