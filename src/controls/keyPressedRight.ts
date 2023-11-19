import { isArrayEqual } from "../utils/isArrayEqual.ts";
import { setNewElement } from "../utils/setNewElement.ts";
import { shiftElements } from "../utils/shiftElements.ts";

export const keyPressedRight = (rows, setRows) => {

    const newRows = rows.map((row, i) => {
        const temp_col = [0, 0, 0, 0];

        let k = 0;
        for (let j = 3; j >= 0; j = j - 1) {
            if (row[j] > 0) {
                temp_col[k] = row[j];
                k = k + 1;
            }
        }

        shiftElements(temp_col);

        return temp_col.slice().reverse();
    });

    if(!isArrayEqual(rows, newRows)) {
        const updatedRows = setNewElement(newRows);
        setRows(prev => updatedRows);
    }


}