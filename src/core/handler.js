import { isObject, isArray, Messenger } from '../utility';

var propChangingMsg = new Messenger();
var propChangedMsg = new Messenger();
var targetKey = '__target__';

function getTarget(value) {
    if (isObject(value)) {
        var target = value[targetKey];

        // value is a proxy return by proxy handler
        if (target != null) {
            value = target;
        }
    }

    return value;
}

class GetPropertyHandler {
    constructor(deepProxy, variables, fullTargetKey) {
        this.deepProxy = deepProxy;
        this.variables = variables;
        this.fullTargetKey = fullTargetKey;
    }

    get(target, key) {
        if (targetKey === key) {
            return target;
        }

        var value = target[key], fullKey = key;

        if (this.fullTargetKey != null) {
            fullKey = this.fullTargetKey + '.' + key;
        }

        if (this.deepProxy && isObject(value)) {
            value = new Proxy(value, new GetPropertyHandler(this.deepProxy, this.variables, fullKey));
        }

        var existed = this.variables.some(function (item) {
            return item.target === target && item.key === key;
        });

        if (!existed) {
            this.variables.push({
                target: target,
                key: key,
                targetKey: this.fullTargetKey
            });
        }

        return value;
    }
}

class SetPropertyHandler {
    constructor() {

    }

    set(target, key, value) {
        var oldValue = target[key];

        if (oldValue !== value || (isArray(target) && key === 'length')) {
            var validation = {
                valid: true,
                apply: true,
                oldValue: oldValue,
                newValue: value
            };

            propChangingMsg.fire({
                target: target,
                key: key,
                data: validation
            });

            if (validation.apply) {
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

class AccessPropertyHandler {
    constructor(deepProxy) {
        this.deepProxy = deepProxy;
    }

    get(target, key) {
        if (targetKey === key) {
            return target;
        }

        var value = target[key];

        if (this.deepProxy && isObject(value)) {
            value = new Proxy(value, new SetPropertyHandler(this.deepProxy));
        }

        return value;
    }

    set(target, key, value) {
        if (this.deepProxy) {
            value = getTarget(value);
        }

        var oldValue = target[key];

        if (oldValue !== value || (isArray(target) && key === 'length')) {
            var validation = {
                valid: true,
                apply: true,
                oldValue: oldValue,
                newValue: value
            };

            propChangingMsg.fire({
                target: target,
                key: key,
                data: validation
            });

            if (validation.apply) {
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

export { GetPropertyHandler, SetPropertyHandler, AccessPropertyHandler, propChangingMsg, propChangedMsg, getTarget }