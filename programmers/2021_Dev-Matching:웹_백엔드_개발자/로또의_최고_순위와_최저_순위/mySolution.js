function solution(lottos, win_nums) {

    let numberMatch = 0;
    let zeroCount = 0;
    lottos.filter((num) => {
        win_nums.includes(num) ? numberMatch++ : numberMatch;
        num === 0 ? zeroCount++ : zeroCount;
    })

    if(zeroCount === 0 && numberMatch == 0){
        return [6, 6]
    }
    else if (numberMatch === 0){
        return [6-numberMatch-zeroCount+1, 6-numberMatch]
    }
    else{
        return [6-numberMatch-zeroCount+1, 6-numberMatch+1]
    }
}