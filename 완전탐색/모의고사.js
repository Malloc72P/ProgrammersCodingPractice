// let answers = [1,2,3,4,5];
let answers = [1,3,2,4,2];

function solution(answers) {
    let answer = [];

    let ansPatternArr = [
        [1,2,3,4,5],
        [2,1,2,3,2,4,2,5],
        [3,3,1,1,2,2,4,4,5,5,]
    ];
    let userScoreArr = [0,0,0];

    let currUserAnswer = 0;
    let currRealAnswer = 0;

    for(let i = 0 ; i < answers.length ; i++){
        currRealAnswer = answers[ i % answers.length ];
        for(let j = 0 ; j < 3 ; j++){
            currUserAnswer = ansPatternArr[j][i % ansPatternArr[j].length];
            if(currRealAnswer === currUserAnswer){
                userScoreArr[j]++;
            }
        }
    }

    let highest = userScoreArr[0];
    for (let i = 1 ; i < 3 ; i++){
        if(userScoreArr[i] > highest){
            highest = userScoreArr[i];
        }
    }
    for (let i = 0 ; i < 3 ; i++){
        if(userScoreArr[i] === highest){
            answer.push(i+1);
        }
    }

    return answer;
}
console.log(solution(answers));
