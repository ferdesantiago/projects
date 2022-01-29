
let minimumChange = function (coins) {
    let minChange = 1;
    coins = coins.sort((a,b) => a-b);
    for(let i=0; i<coins.length; i++) {
        if(minChange < coins[i]) break;
        minChange += coins[i];
    }
    return minChange; 
}

let squareNumbers = function (numbers) {
    let squares = numbers.map((item) => {
        return item ** 2;
    });
    return squares.sort((a,b) => a-b);
}

module.exports = {
    minimumChange,
    squareNumbers
}