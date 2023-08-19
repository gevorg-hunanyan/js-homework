'use strict'

function transposeMatrix(inputMatrix) {
    let result = [];
    for (let i = 0; i < inputMatrix[0].length; i++) {
        result[i] = [];
        for (let j = 0; j < inputMatrix.length; j++) {
            result[i].push(inputMatrix[j][i]);
        }
    }
    return result;
}
