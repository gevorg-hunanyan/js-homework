'use strict'

function createCachingFunction() {
    let cachedValues = {};
    return (value) => {
        if (cachedValues.hasOwnProperty(value)) return cachedValues.value;
        cachedValues.value = value * 2;
        return cachedValues.value;
    }
}
