export const has2048 = (matrix: number[][]): boolean | undefined => {
    for(let i = 0; i < matrix.length; i = i + 1) {
        for(let j = 0; j < matrix.length; j = j + 1) {
            if(matrix[i][j] === 2048) {
                return true;
            }
        }
    }
    return false;
}