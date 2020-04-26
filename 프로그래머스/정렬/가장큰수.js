module.exports = {
  solution : function (numbers) {
      let answer = "";
      numbers.sort((a, b)=>{
          let stringOfA = a.toString();
          let stringOfB = b.toString();

          let case1 = stringOfA + stringOfB;
          let case2 = stringOfB + stringOfA;

          if(Number(case1) < Number(case2)){
              return 1;
          }else return -1;

      });

      for(let i = 0 ; i < numbers.length; i++){
          answer += numbers[i].toString();
      }
      if(answer.charAt(0) === "0"){
          return "0";
      }
      return answer;
  }
};


/*
function backup() {
      let answer = "";
      let strNumbers = numbers.map((x)=>{
          return x.toString();
      });
      strNumbers.sort((a, b)=>{
          let longestStrLength = (a.length > b.length) ? a.length : b.length;
          for (let i = 0 ; i < longestStrLength; i++){
              let numberOfA = ( a.length > i )? (Number(a.charAt(i))) : (Number(a.charAt(0)));
              let numberOfB = ( b.length > i )? (Number(b.charAt(i))) : (Number(b.charAt(0)));
              if( numberOfA < numberOfB ){
                  return 1;
              }else if(numberOfA > numberOfB){
                  return -1;
              }
          }
          return ( a.length > b.length ) ? (1) : (-1);
      });
      if(strNumbers[0] === "0"){
          return "0"
      }
      for(let i = 0 ; i < strNumbers.length; i++){
          answer += strNumbers[i];
          if(i !== strNumbers.length-1){
              answer+= " - ";
          }
          if((i+1) % 10 === 0){
              answer += "\n";
          }
      }
      return answer;


}*/

/*
function backup2() {
    let answer = [];
    let strNumbers = numbers.map((x)=>{
        return x.toString();
    });
    strNumbers.sort((a, b)=>{

        let bigNumOfA = {
            data : Number(a.charAt(0)),
            idx  : 0
        };
        let bigNumOfB = {
            data : Number(b.charAt(0)),
            idx  : 0
        };

        for (let i = 1 ; i < a.length; i++){
            let currItem = Number(a.charAt(i));
            if(currItem > bigNumOfA.data){
                bigNumOfA.data = currItem;
                bigNumOfA.idx = i;
            }
        }
        for (let i = 1 ; i < b.length; i++){
            let currItem = Number(b.charAt(i));
            if(currItem > bigNumOfB.data){
                bigNumOfB.data = currItem;
                bigNumOfB.idx = i;
            }
        }
        if(bigNumOfA.data > bigNumOfB.data){
            return false;
        }else if(bigNumOfA.data < bigNumOfB.data){
            return true;
        }else if(bigNumOfA.idx < bigNumOfB.idx){
            return false;
        }else if(bigNumOfA.idx > bigNumOfB.idx){
            return true;
        }else{
            return a.length > b.length;
        }
    });
    for(let i = 0 ; i < strNumbers.length; i++){
        answer += strNumbers[i] += "-";
    }
    return answer;

}*/
