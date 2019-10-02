import { typeConst, injector } from '../view/injector'

function filter(meta) {
    return function (target) {
        var selector = meta.selector || target.name;
        injector.registerConstructor(typeConst.filter, selector, target, meta);
    };
}

export { filter }