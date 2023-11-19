export const hasAdjacentEqual = (matrix: number[][]): boolean => {
    const numRows = matrix.length;
    const numCols = matrix[0]?.length || 0;
  
    // Iterate through each element in the matrix
    for (let i = 0; i < numRows; i++) {
      for (let j = 0; j < numCols; j++) {
        // Check the right neighbor
        if (j + 1 < numCols && matrix[i][j] === matrix[i][j + 1]) {
          return true;
        }
  
        // Check the bottom neighbor
        if (i + 1 < numRows && matrix[i][j] === matrix[i + 1][j]) {
          return true;
        }
      }
    }
  
    return false; // No adjacent equal numbers found
  }
  