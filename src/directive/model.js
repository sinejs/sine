import { Directive } from '../view';
import { directive } from '../decorator';
import * as utils from '../utility';

@directive({
    namespace: 'sine',
    selector: 'n-model',
    inject: {
        options: '$modelOptions'
    }
})
class ModelDirective extends Directive {
    constructor() {
        super();
        this.$viewValue = null;
        this.$modelValue = null;
        this.$parsers = [];
        this.$formatters = [];
        this.$viewChangeListeners = [];
        this.$validators = [];
        this.$feedback = '';
        this.$pristine = true;
        this.$dirty = false;
        this.$valid = true;
        this.$invalid = false;
    }

    onInsert() {
        var self = this;

        this.setViewValue();

        if (this.$component == null) {
            this.$htmlElement.addEventListener('input', function (e) {
                self.setModelValue(e.target.value);
            });
        }
        else {
            if (utils.isMessenger(this.$component.change)) {
                this.$component.change.on(function (e, args) {
                    self.setModelValue(args.newvalue);
                });
            }
            throw new Error('Compoent ' + this.$component.$$meta.selector + 'must define [change] event');
        }
    }

    onUpdate() {
        this.setViewValue();
    }

    onDestroy() {
        this.$parsers = null;
        this.$formatters = null;
        this.$viewChangeListeners = null;
        this.$validators = null;
    }

    setViewValue() {
        var self = this;

        this.$modelValue = this.$binding.compute();

        var viewValue = this.$modelValue;

        this.$validators.forEach(function (validator) {
            validator.call(self, self.$modelValue, self.$viewValue);
        });

        this.$formatters.forEach(function (formatter) {
            viewValue = formatter.call(self, viewValue);
        });

        if (this.$viewValue !== viewValue) {
            this.$viewValue = viewValue;

            if (this.$component == null) {
                this.$htmlElement.value = this.$modelValue;
            }
            else {
                this.$component.$setAttr('value', this.$modelValue);
            }
        }

        this.updateCss();
        this.updateState();
    }

    setModelValue(viewValue) {
        var self = this;

        this.setDirty(true);

        this.$viewValue = viewValue;

        this.$viewChangeListeners.forEach(function (listener) {
            listener.call(self, viewValue);
        });

        var modelValue = this.$viewValue;

        this.$parsers.forEach(function (parser) {
            modelValue = parser.call(self, modelValue);
        });

        if (this.$modelValue !== modelValue) {
            this.$modelValue = modelValue;

            this.$validators.forEach(function (validator) {
                validator.call(self, self.$modelValue, self.$viewValue);
            });

            this.$binding.assign(this.$modelValue);
        }
    }

    updateCss() {
        var ele = this.$htmlElement,
            css = this.options.cssClass;

        if (this.$dirty) {
            ele.classList.add(css.dirty);
            ele.classList.remove(css.pristine);
        }
        else {
            ele.classList.add(css.pristine);
            ele.classList.remove(css.dirty);
        }

        if (this.$valid) {
            ele.classList.add(css.valid);
            ele.classList.remove(css.invalid);
        }
        else {
            ele.classList.add(css.invalid);
            ele.classList.remove(css.valid);
        }
    }

    updateState() {
        var name = this.$htmlElement.name;

        if (!name) {
            return;
        }

        var scope = this.$binding.scope;

        if (scope[name] == null) {
            scope.$[name] = {};
        }

        var state = scope[name].$;

        state.$pristine = this.$pristine;
        state.$dirty = this.$dirty;
        state.$valid = this.$valid;
        state.$invalid = this.$invalid;
        state.$feedback = this.$feedback;
    }

    setDirty(dirty) {
        this.$dirty = dirty;
        this.$pristine = !dirty;
        this.updateState();
        this.updateCss();
    }

    setValidity(valid, feedback) {
        this.$valid = valid;
        this.$invalid = !valid;
        this.$feedback = feedback;
        this.updateState();
        this.updateCss();
    }
}