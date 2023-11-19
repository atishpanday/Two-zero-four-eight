export const hasZero = (matrix: number[][]): boolean => {
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] === 0) {
          return true; // Found a 0 in the matrix
        }
      }
    }
    return false; // No 0 found in the matrix
  }