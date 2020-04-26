module.exports = {
    solution: function(array, commands){
        let answer = [];
        console.log(`Origin Array : ${array}`);
        console.log(`Origin Commands : ${array}`);

        let coppiedCommands     = commands.slice();

        for (let i = 0 ; i < coppiedCommands.length; i++){
            let poppedCommand = coppiedCommands[i];
            let from        = poppedCommand[0];
            let to          = poppedCommand[1];
            let targetIdx   = poppedCommand[2];

            let copiedArray = array.slice(from - 1, to);//a부터 b전까지
            copiedArray.sort((a,b)=>{ return (a > b) ? 1 : -1; });

            answer.push(copiedArray[targetIdx - 1]);
        }
        return answer;
    }
};
