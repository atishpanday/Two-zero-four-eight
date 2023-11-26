import { calculateTransition } from "./calculateTransition.ts";

export const handleTransition = (rows: number[][], dir: string): number[][] => {

    const newTransMat = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];

    switch (dir) {
        case 'ArrowUp':
            for (let i = 0; i < 4; i = i + 1) {
                const tempCol = calculateTransition([rows[0][i], rows[1][i], rows[2][i], rows[3][i]]);
                newTransMat[0][i] = tempCol[0];
                newTransMat[1][i] = tempCol[1];
                newTransMat[2][i] = tempCol[2];
                newTransMat[3][i] = tempCol[3];
            }
            break;
        case 'ArrowDown':
            for (let i = 0; i < 4; i = i + 1) {
                const tempCol = calculateTransition([rows[3][i], rows[2][i], rows[1][i], rows[0][i]]);
                newTransMat[0][i] = tempCol[3];
                newTransMat[1][i] = tempCol[2];
                newTransMat[2][i] = tempCol[1];
                newTransMat[3][i] = tempCol[0];
            }
            break;
        case 'ArrowLeft':
            for (let i = 0; i < 4; i = i + 1) {
                newTransMat[i] = calculateTransition(rows[i]);
            }
            break;
        case 'ArrowRight':
            for (let i = 0; i < 4; i = i + 1) {
                const tempCol = calculateTransition([rows[i][3], rows[i][2], rows[i][1], rows[i][0]]);
                newTransMat[i][0] = tempCol[3];
                newTransMat[i][1] = tempCol[2];
                newTransMat[i][2] = tempCol[1];
                newTransMat[i][3] = tempCol[0];
            }
            break;
    }
    return newTransMat;
}