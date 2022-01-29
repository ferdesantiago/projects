const main = require('../src/index'); 

test('Case 1', async () => {
    const numbers = [1, 2, 3, 5, 6, 8, 9];
    console.log("Input: " + numbers);
    const result = main.squareNumbers(numbers);
    console.log(result);
    expect(result).toEqual([1, 4, 9, 25, 36, 64, 81]);
});

test('Case 2', async () => {
    const numbers = [-2, -1];
    console.log("Input: " + numbers);
    const result = main.squareNumbers(numbers);
    console.log(result);
    expect(result).toEqual([1, 4]);
});

test('Case 3', async () => {
    const numbers = [-10, -5, 0, 5, 10];
    console.log("Input: " + numbers);
    const result = main.squareNumbers(numbers);
    console.log(result);
    expect(result).toEqual([0, 25, 25, 100, 100]);
});

test('Case 4', async () => {
    const numbers = [0, 1];
    console.log("Input: " + numbers);
    const result = main.squareNumbers(numbers);
    console.log(result);
    expect(result).toEqual([0, 1]);
});