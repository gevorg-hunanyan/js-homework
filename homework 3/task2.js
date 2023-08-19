'use strict'

function arrayOfMininums(inputMatrix) {
    let result = [];
    for (let i = 0; i < inputMatrix.length; i++) {
        let minimum = Infinity;
        for (let j = 0; j < inputMatrix[i].length; j++) {
            if (inputMatrix[i][j] < minimum) {
                minimum = inputMatrix[i][j];
            }
        }
        result.push(minimum);
    }
    return result;
}
