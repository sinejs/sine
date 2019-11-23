import { typeConst, injector } from '../view'

export function service(meta) {
    return function (target) {
        var selector = meta.selector || target.name;
        injector.registerConstructor(typeConst.service, selector, target, meta);
    };
}