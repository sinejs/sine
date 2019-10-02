import { typeConst, injector } from '../view/injector'

function directive(meta) {
    return function (target) {
        var selector = meta.selector || target.name;
        injector.registerConstructor(typeConst.directive, selector, target, meta);
    };
}

export { directive }