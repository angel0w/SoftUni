function diagonalAttack (array) {
    let matrix = []
    for (let i = 0; i < array.length; i++) {
        matrix.push(array[i].split(' ').map(Number))
        
    }

    let leftDiagonal = 0;
    let rightDiagonal = 0;

    for (let i = 0; i < matrix.length; i++) {
        leftDiagonal += matrix[i][i];
        rightDiagonal += matrix[i][matrix.length - 1 -i];

    }

    if (leftDiagonal === rightDiagonal) {
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix.length; j++) {

                if ((j !== matrix.length-1-i) && (j !== i)) {
                    matrix[i][j]=  leftDiagonal;

                }
            }
            
        }

    }
    for (let i = 0; i < matrix.length; i++) {
        console.log(matrix[i].join(' '));
        
    }
}
diagonalAttack(['5 3 12 3 1',
                '11 4 23 2 5',
                '101 12 3 21 10',
                '1 4 5 2 2',
                '5 22 33 11 1']);
diagonalAttack(['1 1 1',
                '1 1 1', 
                '1 1 0']);