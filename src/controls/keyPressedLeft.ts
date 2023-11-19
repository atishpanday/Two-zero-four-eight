import { isArrayEqual } from "../utils/isArrayEqual.ts";
import { setNewElement } from "../utils/setNewElement.ts";
import { shiftElements } from "../utils/shiftElements.ts";

export const keyPressedLeft = (rows: number[][], setRows: React.Dispatch<React.SetStateAction<number[][]>>): void => {

    const newRows = rows.map((row, i) => {

        const temp_col = [0, 0, 0, 0];

        let k = 0;
        for(let j = 0; j < 4; j = j + 1) {
            if(row[j] > 0) {
                temp_col[k] = row[j];
                k = k + 1;
            }
        }

        shiftElements(temp_col);
        
        return temp_col;
    })

    if(!isArrayEqual(rows, newRows)) {
        const updatedRows = setNewElement(newRows);
        setRows(prev => updatedRows);
    }


}