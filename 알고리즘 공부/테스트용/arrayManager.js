module.exports = {
    swap: function (arr, a, b) {
        let temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp;
    },
    printPretty: function (arr, maxLen) {
        let elementSize = 3;
        if(maxLen){
            elementSize = maxLen;
        }
        for (let i = 0 ; i < arr.length; i++){
            process.stdout.write(`[ ${String(arr[i]).padEnd(elementSize, ' ')} ] `);

            if((i + 1) % 10 === 0){
                console.log();
            }

        }
    }
};
