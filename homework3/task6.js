'use strict'

function findBiggestMinor(inputMatrix, value = 1) {
    let biggestSizeCorner = [];
    for (let i = 0; i < inputMatrix.length; i++) {
        biggestSizeCorner[i] = [...inputMatrix[i]];
    }
    for (let i = 0; i < inputMatrix.length; i++) {
        for (let j = 0; j < inputMatrix[0].length; j++) {
            biggestSizeCorner[i][j] = findBiggestSizeCorner(inputMatrix, i, j, value);
            //console.log(biggestSizeCorner);
            //console.log('--------------------------------------------');
        }
    }
    return biggestSizeCorner;
}

function findBiggestSizeCorner(inputMatrix, row, col, value) {
    console.log('entered with');
    console.log(row, col, value);
    console.log('inputMatrix dimensions');
    console.log(inputMatrix.length, inputMatrix[0].length);
    for (let depth = 0; row + depth < inputMatrix.length && col + depth < inputMatrix[0].length; depth++) {
        console.log(depth);
        for (let i = 0; i <= depth; i++) {
            if (inputMatrix[row + depth][col + i] != value) {
                console.log(depth);
                console.log(row, col);
                console.log('----------------------------------------------------------------------------------------------');
                return depth;
            }
            if (inputMatrix[row + i][col + depth] != value) {
                console.log(depth);
                console.log(row, col);
                console.log('----------------------------------------------------------------------------------------------');
                return depth;
            }
        }
    }
}

let matrix = [[1,1,1],
              [1,1,1],
              [1,1,1]];

console.log(findBiggestMinor(matrix));
console.log(matrix);

