'use strict'

function partial(callback, ...args) {
    return function(...args2) {
        return callback(...args, ...args2);
    }
}
