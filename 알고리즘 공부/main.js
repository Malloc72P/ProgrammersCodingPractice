const arrayManager                  = require("./테스트용/arrayManager");
const randomGenerator       = require("./테스트용/random-number-generator");
const quickSort             = require("./정렬/퀵소트/QuickSort");

const towerSolver = require("./../프로그래머스/스택큐/탑");

// let input = [6,9,5,7,4];
// let input = [3,9,9,3,5,7,2];
let input = [1,5,3,6,7,6,5];

console.log(`answer is ${towerSolver.solution(input)}`);
