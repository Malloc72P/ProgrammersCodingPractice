const arrayManager                  = require("./테스트용/arrayManager");
const randomGenerator       = require("./테스트용/random-number-generator");
const quickSort             = require("./정렬/퀵소트/QuickSort");

let array = [1,2,3,4,5];

let copiedArray = array.slice();

let temp;

temp = array.splice(0, 1);
console.log(`temp is ${temp}`);
temp = array.splice(0, 1);
console.log(`temp is ${temp}`);
temp = array.splice(0, 1);
console.log(`temp is ${temp}`);
temp = array.splice(0, 1);
console.log(`temp is ${temp}`);
temp = array.splice(0, 1);
console.log(`temp is ${temp}`);

console.log(`array is ${array}`);
console.log(`copiedArray is ${copiedArray}`);
