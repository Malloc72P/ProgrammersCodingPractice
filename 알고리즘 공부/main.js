const arrayManager                  = require("./테스트용/arrayManager");
const randomGenerator       = require("./테스트용/random-number-generator");
const quickSort             = require("./정렬/퀵소트/QuickSort");

let testArr =  randomGenerator.generateRandomArray(1000);

quickSort.quickSort(testArr, 0, testArr.length - 1);

arrayManager.printPretty(testArr);
