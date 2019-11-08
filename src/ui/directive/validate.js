import { Directive } from "../../view/directive";
import { directive } from "../../decorator/directive";

@directive({
    namespace: 'sine.ui',
    selector: 'n-validate'
})
class ValidateDirective extends Directive {
    constructor() {
        super();
    }

    onCompile() {
        var self = this, nModel = this.$element.getDirective('n-model');

        if (!nModel) {
            throw new Error('Require "n-model"');
        }

        nModel.$validators.push(function (modelValue) {
            var validator = self.$binding.compute();

            if (validator != null) {
                var result = validator.call(self, modelValue)
            }

            if (result != null) {
                nModel.setValidity(result.valid, result.feedback);
            }
            else {
                nModel.setValidity(true, null);
            }
        });
    }
}