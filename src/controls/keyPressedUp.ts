import { shiftElements } from "./shiftElements.ts";

export const keyPressedUp = (rows: number[][]): number[][] => {

    let row1 = [0, 0, 0, 0];
    let row2 = [0, 0, 0, 0];
    let row3 = [0, 0, 0, 0];
    let row4 = [0, 0, 0, 0];

    for(let i = 0; i < 4; i = i + 1) {
        const temp_col = [0, 0, 0, 0];

        let k = 0;
        for(let j = 0; j < 4; j = j + 1) {
            if(rows[j][i] > 0) {
                temp_col[k] = rows[j][i];
                k = k + 1;
            }
        }

        shiftElements(temp_col);

        row1[i] = temp_col[0];
        row2[i] = temp_col[1];
        row3[i] = temp_col[2];
        row4[i] = temp_col[3];
    }

    const newRows = [row1, row2, row3, row4];

    return newRows;

}