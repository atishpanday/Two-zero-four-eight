import { shuffleArray } from "./shuffleArray.ts";

export const getDistinctRandomNumbers = (min: number, max: number): number[] => {
    const numbers = Array.from({ length: max - min + 1 }, (_, index) => min + index);

    // Shuffle the array
    shuffleArray(numbers);

    // Pick the first two elements
    const [num1, num2] = numbers.slice(0, 2);

    return [num1, num2];
}