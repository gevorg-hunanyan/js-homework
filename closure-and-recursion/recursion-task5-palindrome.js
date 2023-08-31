'use strict'

function isPalindrome(inputString) {
    if (inputString.length <= 1) return true;
    if (inputString[0] !== inputString[inputString.length - 1]) return false;
    
    return isPalindrome(inputString.slice(1, inputString.length - 1));
}
