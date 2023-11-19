import { chooseNewNumber } from './chooseNewNumber.ts'

export const setNewElement = (newRows: number[][]): number[][] => {

    let zerosIndex: number[] = [];

    newRows.forEach((row, i) => {
        for(let j = 0; j < 4; j++) {
            if(row[j] === 0) {
                zerosIndex.push(i * 4 + j);
            }
        }
    })

    let r_index = zerosIndex[(Math.floor(Math.random() * zerosIndex.length))];

    const updatedRows = newRows.map((row, i) => {
        const newRow = row.slice();
        if (i === Math.floor(r_index / 4)) {
            newRow[r_index % 4] = chooseNewNumber();
        }
        return newRow;
    });

    return updatedRows;
}