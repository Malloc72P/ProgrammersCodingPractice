const arrayManager = require("./arrayManager");

module.exports = {
    generateRandomArray : function (size){
            let randomArr = [];
            let min = 0;
            let max = size-1;
            for (let i = 0 ; i < size; i++){
                randomArr.push(i + 1);
            }

            for (let i = 0 ; i < size; i++){
                let randomIdx = Math.floor(Math.random() * (max - min)) + min;
                arrayManager.swap(randomArr, i, randomIdx);
            }
            return randomArr;
        }
};
