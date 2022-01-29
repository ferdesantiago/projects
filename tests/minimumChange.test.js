const main = require('../src/index'); 

test('Case 1', async () => {
    const coins = [5, 7, 1, 1, 2, 3, 22];
    console.log("Input: " + coins);
    const result = main.minimumChange(coins);
    console.log(result);
    expect(result).toEqual(20);
});

test('Case 2', async () => {
    const coins = [1, 1, 1, 1, 1];
    console.log("Input: " + coins);
    const result = main.minimumChange(coins);
    console.log(result);
    expect(result).toEqual(6);
});

test('Case 3', async () => {
    const coins = [1, 5, 1, 1, 1, 10, 15, 20, 100];
    console.log("Input: " + coins);
    const result = main.minimumChange(coins);
    console.log(result);
    expect(result).toEqual(55);
});

test('Case 4', async () => {
    const coins = [1, 2, 3, 3, 5, 6, 8];
    console.log("Input: " + coins);
    const result = main.minimumChange(coins);
    console.log(result);
    expect(result).toEqual(29);
});