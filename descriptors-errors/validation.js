'use strict'

function validateObj(obj, validationRules) {
    let result = {};
    for (let key in obj) {
        Object.defineProperty(result, key, {
                value: obj[key],
                writable: validationRules.writable,
                enumerable: validationRules.enumerable,
                configurable: validationRules.configurable,
            });
    }
    return result;
}
