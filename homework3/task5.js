'use strict'

function matrixCutOnTop(inputMatrix, inputCutNumber) {
    let toIncludeRows = Array(inputMatrix.length).fill(false);
    let toIncludeCols = Array(inputMatrix[0].length).fill(false);
    let currentSum;
    for (let i = 0; i < inputMatrix.length; i++) {
        currentSum = 0;
        for (let j = 0; j < inputMatrix[0].length; j++) {
            currentSum += inputMatrix[i][j];
        }
        if (currentSum <= inputCutNumber) {
            toIncludeRows[i] = true;
        }
    }
    for (let i = 0; i < inputMatrix[0].length; i++) {
        currentSum = 0;
        for (let j = 0; j < inputMatrix.length; j++) {
            currentSum += inputMatrix[j][i];
        }
        if (currentSum <= inputCutNumber) {
            toIncludeCols[i] = true;
        }
    }
    let result = [...inputMatrix];
    for (let i = 0; i < toIncludeRows.length; i++) {
        for (let j = 0; j < toIncludeCols.length; j++) {
            if (!toIncludeRows[i]) {

            }
        }
    }
}

