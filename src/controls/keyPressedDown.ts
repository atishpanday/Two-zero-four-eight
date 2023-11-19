import { isArrayEqual } from "../utils/isArrayEqual.ts";
import { setNewElement } from "../utils/setNewElement.ts";
import { shiftElements } from "../utils/shiftElements.ts";

export const keyPressedDown = (rows, setRows) => {

    let row1 = [0, 0, 0, 0];
    let row2 = [0, 0, 0, 0];
    let row3 = [0, 0, 0, 0];
    let row4 = [0, 0, 0, 0];

    for (let i = 0; i < 4; i = i + 1) {
        const temp_col = [0, 0, 0, 0];

        let k = 0;
        for (let j = 3; j >= 0; j = j - 1) {
            if (rows[j][i] > 0) {
                temp_col[k] = rows[j][i];
                k = k + 1;
            }
        }

        shiftElements(temp_col);

        row1[i] = temp_col[3];
        row2[i] = temp_col[2];
        row3[i] = temp_col[1];
        row4[i] = temp_col[0];
    }

    const newRows = [row1, row2, row3, row4];

    if(!isArrayEqual(rows, newRows)) {
        const updatedRows = setNewElement(newRows);
        setRows(prev => updatedRows);
    }


}