import { typeConst, injector } from '../view'

export function component(meta) {
    return function (target) {
        var selector = meta.selector || target.name;
        injector.registerConstructor(typeConst.component, selector, target, meta);
    };
}