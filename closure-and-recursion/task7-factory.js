'use strict'

function createCalculator(operation) {
    let operations = {
        add(a, b) { return a + b },
        multiply(a, b) { return a * b },
        modulus(a, b) { return a % b },
    }
    return operations[operation];
}
