module.exports = {
    solution : function (heights) {
        let answer = [];

        let copiedHeights = heights.slice();

        while (copiedHeights.length > 0){
            let popedIdx = copiedHeights.length;
            let popedTower = copiedHeights.pop();

            let foundIt = false;

            for (let i = copiedHeights.length - 1 ; i >= 0; i-- ){
                let currTower = copiedHeights[i];
                if(currTower > popedTower){
                    answer.splice(0,0, i + 1);
                    foundIt = true;
                    break;
                }
            }
            if(!foundIt){
                answer.splice(0,0, 0);
            }
        }

        return answer;
    }
};
