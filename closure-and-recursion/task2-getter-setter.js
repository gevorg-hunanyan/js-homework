'use strict'

function privateVariable(value) {
    let val = value;
    return {
        get() { return val },
        set(newVal) { val = newVal },
    };
}
