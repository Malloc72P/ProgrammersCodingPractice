let participant = ["leo", "kiki", "eden"];
let completion = ["eden", "kiki"];
let answer = "";
let rootOfComplete = [];

for(let completedOne of completion){
    saveName(rootOfComplete, completedOne, 0);
}
for(let currUser of participant){
    if(!findName(rootOfComplete, currUser)){
        answer = currUser;
        break;
    }
}

console.log(`완주하지 못한 선수는 ${answer}`);



function findNameFromNList(nList, name) {
    for(let currItem of nList){
        if(currItem === name){
            nList.splice(nList.indexOf(currItem), 1);
            return true;
        }
    }
    return false;
}
function findName(dataStructure, name) {
    let res = false;
    let currNode = dataStructure[charToNum(name, 0)];
    for(let i = 0 ; i < name.length; i++){
        if(i === name.length -1){
            res = findNameFromNList(currNode.nList, name);
            break;
        }
        else if(currNode){
            currNode = currNode.link[charToNum(name, i + 1)];
        }
        else{
            break;
        }
    }
    return res;
}
function saveName(dataStructure, name, idx) {
    let currCharNum = charToNum(name, idx);
    if(!dataStructure[currCharNum]){
        dataStructure[currCharNum] = createNameNode();
    }

    let currNode = dataStructure[currCharNum];

    if(idx === name.length - 1){
        currNode.nList.push(name);
    }else{
        saveName(currNode.link, name, idx + 1 );
    }
}

function createNameNode() {
    return { link : [], nList : [] };
}
function charToNum(str, idx) {
    const aStartFrom = 97;
    return str.charCodeAt(idx) - aStartFrom;
}
