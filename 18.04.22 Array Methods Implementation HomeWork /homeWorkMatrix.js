const matrix1 = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
  ];
  
const matrix2 = [
    [1, 2, 3],
    [4, 5, []],
    [7, 8, 9],
    [null, 11, 12],
    [13, 14, NaN],
  ];
  
const rotate90Degree = (matrix) => {
    const final = [];

    for(let i = 0; i < matrix[0].length; i++){
        const firstArr = [];
        for(let j = matrix.length - 1; j > -1; j--){
            firstArr.push(matrix[j][i]);
        }
        final.push(firstArr);
    }
    return final;
}

const calculateRotationNumber = (deg) => {
	if (deg % 90 !== 0) {
        throw new RangeError('Incorrect value')
    }
    deg = (deg % 360) / 90;
    deg += deg < 0 ? 4 : 0;
    
    return deg
}

const rotate = (matrix, deg) => {
    let r = calculateRotationNumber(deg);
    let result = matrix;
    while (r > 0){
        r--;
        result = rotate90Degree(result);
    }
    return result;
}

//console.log(rotate(matrix1, 180)) 
//console.log(rotate(matrix2, 180))
  
  // 2. Rotate all matrix elements except the diagonals
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

function rotateDiagonal(matrix){
    let length = matrix.length;
            for (let i = 0; i < length / 2; i++) {
                for (let j = i; j < length - i - 1; j++) {
                    if (i != j && (i + j) != length - 1) {
                        let prev = length - 1 - i;
                        let prev2 = length - 1 - j;
                
                        let temp = matrix[i][j];
                        matrix[i][j] = matrix[prev2][i];
                        matrix[prev2][i] = matrix[prev][prev2];
                        matrix[prev][prev2] = matrix[j][prev];
                        matrix[j][prev] = temp;
                    }
                }
            }
      return matrix;
}

//console.log(rotateDiagonal(matrix))