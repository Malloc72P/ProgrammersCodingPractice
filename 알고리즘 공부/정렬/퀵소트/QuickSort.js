const arrayManager = require("../../테스트용/arrayManager");
module.exports = {
    quickSort : function (arr, low, high) {
        if(low < high){
            let pivot = partition(arr, low, high);

            this.quickSort(arr, low, pivot - 1);
            this.quickSort(arr, pivot + 1, high);
        }
    }
};

function partition(arr, low, high) {
    let pivot = arr[high];
    let i = low - 1;

    for (let j = low ; j <= high - 1 ; j++){
        if(arr[j] < pivot){
            i++;
            arrayManager.swap(arr, i, j);
        }
    }
    arrayManager.swap(arr, i + 1, high);
    return i + 1;
}
