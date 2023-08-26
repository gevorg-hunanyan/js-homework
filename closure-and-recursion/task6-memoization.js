'use strict'

function fibonacci(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    let result = 1;
    let prev = 0;
    let temp = 0;
    for (let i = 1; i < n; i++) {
        temp = result;
        result += prev;
        prev = temp;
    }
    return result;
}
const memoizedFibonacci = memoize(fibonacci); 
console.log(memoizedFibonacci(10)); // Output: 55 (calculated)
console.log(memoizedFibonacci(10)); // Output: 55 (cached)


function memoize(func) {
    let cachedValues = {};
    return (n) => {
        if (cachedValues.n !== undefined) return cachedValues.n;
        cachedValues.n = func(n);
        console.log('no cache');
        return cachedValues.n;
    }
}
