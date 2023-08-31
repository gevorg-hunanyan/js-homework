'use strict'

function arraySum(inputArray) {
    if (!inputArray.length) return 0;
    return inputArray[0] + arraySum(inputArray.slice(1));
}
