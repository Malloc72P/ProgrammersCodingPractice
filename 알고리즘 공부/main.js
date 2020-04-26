const arrayManager                  = require("./테스트용/arrayManager");
const randomGenerator       = require("./테스트용/random-number-generator");
const quickSort             = require("./정렬/퀵소트/QuickSort");

const towerSolver = require("./../프로그래머스/스택큐/탑");

// const kFinder = require("./../프로그래머스/정렬/k번째수");
const bigNumFinder = require("./../프로그래머스/정렬/가장큰수");


let array = [3, 30, 34, 5, 9]	;
// let array = [40,403 ]	;

/*let array = []	;
const min = 0;
const max = 1000;
const arrayLength = 10;
for (let i = 0 ; i < arrayLength; i++){
    let testElement = Math.floor(Math.random() * (max - min)) + min;
    array.push(testElement);
}*/

console.log(`array is ${array}\n`);
console.log(`answer is ${bigNumFinder.solution(array)}`);

//1 11 109

//109111
//111109
