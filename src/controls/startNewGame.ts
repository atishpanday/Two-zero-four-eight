import { getDistinctRandomNumbers } from "../utils/getDistinctRandomNumbers.ts";

export const startNewGame = (): number[][] => {
    const initRows: (number[])[] = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];

    const [init1, init2] = getDistinctRandomNumbers(0, 15);
  
    initRows[Math.floor(init1 / 4)][init1 % 4] = 2;
    initRows[Math.floor(init2 / 4)][init2 % 4] = 2;

    return initRows;
}