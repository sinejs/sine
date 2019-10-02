import { typeConst, injector } from '../view/injector'

function service(meta) {
    return function (target) {
        var selector = meta.selector || target.name;
        injector.registerConstructor(typeConst.service, selector, target, meta);
    };
}

export { service }