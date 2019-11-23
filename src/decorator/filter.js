import { typeConst, injector } from '../view'

export function filter(meta) {
    return function (target) {
        var selector = meta.selector || target.name;
        injector.registerConstructor(typeConst.filter, selector, target, meta);
    };
}