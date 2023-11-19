import { setNewElement } from "./setNewElement.ts";
import { shiftElements } from "./shiftElements.ts";

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

    const updatedRows = setNewElement(newRows);

    setRows(() => updatedRows);

}