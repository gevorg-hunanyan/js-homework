'use strict'

function createCachingFunction() {
    let cachedValues = {};
    return (value) => {
        if (cachedValues.hasOwnProperty(value)) return cachedValues.value;
        return value * 2;
    }
}
