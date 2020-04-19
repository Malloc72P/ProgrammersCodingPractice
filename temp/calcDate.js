let startDate = new Date('2020/04/25 06:04');

let currentDate = new Date('2020/06/25 16:24');

let endDate = new Date('2020/07/14 16:24');

let totalDiff = endDate  - startDate;
let currDiff = currentDate  - startDate;

let percentage = ( currDiff / totalDiff ) * 100;
percentage = percentage.toFixed(0);


console.log(`날짜 진행도 : ${percentage}%`);
console.log(`남은 시간 : ${makeMilliPretty(endDate - currentDate)}`);





function makeMilliPretty(dateDiff) {
    //                           날   시   분    초
    let result = "";
    let day     = (dateDiff / (24 * 60 * 60 * 1000))
    day = day.toFixed(0);
    let hour    = dateDiff / (     60 * 60 * 1000)
    hour = hour.toFixed(0);
    let minute  = (dateDiff - (hour * 60 * 60 * 1000)) / (60 * 1000)
    minute = minute.toFixed(0);

    if(day > 0){
        result += `${day}일`;
    }else{
        result += `${hour}시 ${minute}분`;
    }
    return result;
}

