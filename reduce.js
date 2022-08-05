var array1 = [1, 2, 3, 4];
// 0 + 1 + 2 + 3 + 4
var initialValue = 10;
var sumWithInitial = array1.reduce(function (previousValue, currentValue) {
    console.log(previousValue, currentValue);
    return previousValue + currentValue;
}, initialValue);
console.log(sumWithInitial);
// expected output: 10
