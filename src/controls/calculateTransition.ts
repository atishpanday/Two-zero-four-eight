export const calculateTransition = (row: number[]): number[] => {
    let transitionRow = [0, 0, 0, 0];


    // transitions of first cell
    if (row[0] === 0) {
        if (row[1] > 0) {
            transitionRow[0] = 1;
        }
        else if (row[2] > 0) {
            transitionRow[0] = 2;
        }
        else if (row[3] > 0) {
            transitionRow[0] = 3;
        }
        else {
            transitionRow[0] = 0;
        }
    }
    else {
        if (row[0] === row[1]) {
            transitionRow[0] = 1;
        }
        else if (row[0] === row[2] && row[1] === 0) {
            transitionRow[0] = 2;
        }
        else if (row[0] === row[3] && row[1] === 0 && row[2] === 0) {
            transitionRow[0] = 3;
        }
        else {
            transitionRow[0] = 0;
        }
    }

    // transitions of the second cell
    if (row[1] === 0 && row[0] === 0) {
        if (row[2] === row[3]) {
            transitionRow[1] = 0;
        }
        else {
            transitionRow[1] = 2;
        }
    }
    else if (row[1] === 0) {
        if (row[2] === row[3] && row[2] > 0) {
            transitionRow[1] = 2;
        }
        else if (row[2] > 0) {
            transitionRow[1] = 1;
        }
        else if (row[3] > 0) {
            transitionRow[1] = 2;
        }
        else {
            transitionRow[1] = 0;
        }
    }
    else if (row[0] !== row[1]) {
        if (row[1] === row[2]) {
            transitionRow[1] = 1;
        }
        else if (row[1] === row[3] && row[2] === 0) {
            transitionRow[1] = 2;
        }
        else {
            transitionRow[1] = 0;
        }
    }
    else {
        if (row[2] === row[3] || (row[2] === 0 && row[3] > 0)) {
            transitionRow[1] = 2;
        }
        else if (row[2] > 0) {
            transitionRow[1] = 1;
        }
        else {
            transitionRow[1] = 0;
        }
    }

    // transitions of the third cell
    if (row[3] === 0) {
        transitionRow[2] = 0;
    }
    else if (row[2] === 0) {
        if (row[0] === row[1] || row[0] === 0 || row[1] === 0) {
            transitionRow[2] = 0;
        }
        else {
            transitionRow[2] = 1;
        }
    }
    else {
        if (row[0] === 0 || row[1] === 0) {
            transitionRow[2] = 0;
        }
        else if (row[0] === row[1]) {
            transitionRow[2] = 0;
        }
        else if (row[2] === row[3]) {
            transitionRow[2] = 1;
        }
        else {
            transitionRow[2] = 0;
        }
    }

    return transitionRow;
}