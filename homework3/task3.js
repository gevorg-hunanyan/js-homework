'use strict'

function containsWord(inputMatrix, inputWord) {
    inputMatrix.forEach(row => {
        row.forEach(element => {
            if (element === inputWord) {
                return true;
            }
        });
    });
    return false;
}
