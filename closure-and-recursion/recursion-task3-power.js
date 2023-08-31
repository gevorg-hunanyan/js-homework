'use strict'

function power(number, exponent) {
    if (exponent === 0) return 1;
    if (exponent === 1) return number;
    if (exponent === 2) return number * number;

    if (exponent % 2) return number * power(number, Math.floor(exponent/2)) * power(number, Math.floor(exponent/2));
    return power(number, exponent/2) * power(number, exponent/2);
}
