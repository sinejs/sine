import { typeConst, injector } from '../view/injector'

function component(meta) {
    return function (target) {
        var selector = meta.selector || target.name;
        injector.registerConstructor(typeConst.component, selector, target, meta);
    };
}

export { component }