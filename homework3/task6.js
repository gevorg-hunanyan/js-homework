'use strict'

function findBiggestMinor(inputMatrix, value = 1) {
    let auxMatrix = [];
    for (let i = 0; i < inputMatrix.length; i++) {
        auxMatrix[i] = [];
    }
    let result = 0;
    for (let i = 0; i < inputMatrix.length; i++) {
        auxMatrix[i][0] = inputMatrix[i][0];
    }
    for (let i = 0; i < inputMatrix[0].length; i++) {
        auxMatrix[0][i] = inputMatrix[0][i];
    }
    for (let i = 1; i < inputMatrix.length; i++) {
        for (let j = 1; j < inputMatrix[0].length; j++) {
            if (inputMatrix[i][j] === value) {
                auxMatrix[i][j] = Math.min(auxMatrix[i][j - 1], auxMatrix[i - 1][j], auxMatrix[i - 1][j - 1]) + 1;
                if (auxMatrix[i][j] > result) {
                    result = auxMatrix[i][j];
                }
            }
        }
    }
    return result;
}
