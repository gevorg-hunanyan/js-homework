'use strict'

function containsWord(inputMatrix, inputWord) {
    for (let i = 0; i < inputMatrix.length; i++) {
        let rowString = '';
        for (let j = 0; j < inputMatrix[0].length; j++) {
            rowString += inputMatrix[i][j];
        }
        if (rowString.includes(inputWord)) {
            return true;
        }
        if (rowString.split('').reverse().join('').includes(inputWord)) {
            return true;
        }
    }
    for (let i = 0; i < inputMatrix[0].length; i++) {
        let rowString = '';
        for (let j = 0; j < inputMatrix.length; j++) {
            rowString += inputMatrix[j][i];
        }
        if (rowString.includes(inputWord)) {
            return true;
        }
        if (rowString.split('').reverse().join('').includes(inputWord)) {
            return true;
        }
    }
    return false;
}

