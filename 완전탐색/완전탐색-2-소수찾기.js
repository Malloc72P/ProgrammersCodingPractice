function numArrToString(arr) {
    let result = 0;
    for (let i = 0 ; i < arr.length; i++){
        if(i === arr.length - 1){
            result += arr[i];
        }else{
            let numPosition = arr.length - i;
            result += ( arr[i] * ( Math.pow(10, numPosition - 1) ) );
        }
    }
    return result;
}
function convertStringToArray(str){
    let newArr = [];
    for (let i = 0 ; i < str.length; i++){
        newArr.push( Number( str.charAt(i) ) );
    }
    return newArr;
}
function isPrimeNumber(num){
    if(num === 0 || num === 1){
        return false;
    }else if(num === 2){
        return true
    }else if(num % 2 === 0){
        return false;
    }

    for (let i = 3 ; i < num ; i+=2){
        if(num % i === 0){
            return false;
        }
    }
    return true;
}
function dfs(arr, idx, permutationLength, originArray, visited, permutationArray){
    //arr : 임시버퍼임. 여기에 순회하면서 구한 값을 저장해둠. 즉 순열이 여기 저장됨.
    if(idx === permutationLength){
        permutationArray.add(numArrToString(arr));
        return;
    }
    for (let i = 0 ; i < originArray.length; i++){
        if (visited[i]){
            continue;
        }
        visited[i] = true;
        arr[idx] = originArray[i];
        dfs(arr, idx + 1, permutationLength, originArray, visited, permutationArray);

        visited[i] = false;
    }
}
function findPermutation(permutationArray, numArr, permutationLength){
    let visited = [];//방문 여부를 저장함
    let arr = [];//임시버퍼
    dfs(arr, 0, permutationLength, numArr, visited, permutationArray );
}

let strArr = "011";//입력
let numArr = convertStringToArray(strArr);
//입력인 strArr을 number Array로 변환하여 리턴함

let permutationArray = new Set();

for(let i = 1 ; i <= numArr.length; i++){
    findPermutation(permutationArray, numArr, i);
}

let numberOfPrimeNumber = 0;
for(let currItem of permutationArray){
    if(isPrimeNumber(currItem)){
        numberOfPrimeNumber++;
    }
}

console.log(numberOfPrimeNumber);



