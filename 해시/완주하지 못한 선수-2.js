function solution(participant, completion) {
    let answer = '';
    let compMap = new Map();
    for(let i = 0; i < completion.length; i++){
        let data = {data : 0};
        let currItem = completion[i];
        if(compMap.has(currItem)){
            data = compMap.get(currItem);
        }
        data.data++;
        compMap.set(currItem, data );
    }

    for(let i = 0 ; i < participant.length; i++){
        let currItem = participant[i];
        let findItem = compMap.get(currItem);
        if(!findItem){
            answer = currItem;
            break;
        }
        else if(findItem.data <= 0){
            answer = currItem;
            break;
        }else{
            findItem.data--;
        }
    }
    return answer;
}

let p = ["mislav", "stanko", "mislav", "ana"];
let c = ["stanko", "ana", "mislav"];

console.log(`answer is ${solution(p,c)}`);

