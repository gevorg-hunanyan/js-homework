'use strict'

function greatestSumIndex(inputMatrix) {
    let greatestSum = -Infinity;
    let greatestSumIndex;
    for (let i = 0; i < inputMatrix.length; i++) {
        if (inputMatrix[i].reduce((x, y) => x + y, 0) > greatestSum) {
            greatestSum = inputMatrix[i].reduce((x, y) => x + y, 0);
            greatestSumIndex = i;
        }
    }
    return greatestSumIndex;
}
