'use strict'

function createCounter() {
    let count = 0;
    return () => {
        return ++count;
    }
}
