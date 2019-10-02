import { isObject, isArray } from './utils';
import { Messenger } from './message';

var propChangingMsg = new Messenger();
var propChangedMsg = new Messenger();

class SetPropertyHandler {
    constructor(deepProxy) {
        this.selfKey = '__self__';
        this.deepProxy = deepProxy;
    }

    get(target, key) {
        if (this.selfKey === key) {
            return target;
        }

        var value = target[key];

        if (this.deepProxy && isObject(value)) {
            value = new Proxy(value, new SetPropertyHandler(this.deepProxy));
        }

        return value;
    }

    set(target, key, value) {
        if (this.deepProxy && isObject(value)) {
            var self = value[this.selfKey];

            // value is a proxy return by this handler
            if (self != null) {
                value = self;
            }
        }

        var oldValue = target[key];

        if (oldValue !== value || (isArray(target) && key === 'length')) {
            var validation = {
                isValid: true,
                oldValue: oldValue,
                newValue: value
            };

            propChangingMsg.fire({
                target: target,
                key: key,
                data: validation
            });

            if (validation.isValid) {
                target[key] = value;
                propChangedMsg.fire({
                    target: target,
                    key: key,
                    data: {
                        oldValue: oldValue,
                        newValue: value
                    }
                });
            }
        }

        return true;
    }
}

class GetPropertyHandler {
    constructor(propMaps, deepProxy) {
        this.propMaps = propMaps;
        this.deepProxy = deepProxy;
    }

    get(target, key) {
        var value = target[key];

        if (this.deepProxy && isObject(value)) {
            value = new Proxy(value, new GetPropertyHandler(this.propMaps, this.deepProxy));
        }

        var existed = this.propMaps.some(function (item) {
            return item.obj === target && item.prop === key;
        });

        if (!existed) {
            this.propMaps.push({
                obj: target,
                prop: key
            });
        }

        return value;
    }
}

export { SetPropertyHandler, GetPropertyHandler, propChangingMsg, propChangedMsg }