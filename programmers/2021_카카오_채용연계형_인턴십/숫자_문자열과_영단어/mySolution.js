function solution(s) {
    let answer = "";
    let data = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

    let word = ''
    for(let i=0; i<= s.length; i++){
        const foundNum = data.findIndex(num => num === word);

        if(foundNum !== -1){
            answer += foundNum;
            word = "";
        }
        if(isNaN(s[i])){
            word += s[i]
        }else{
            answer += s[i];
        }
    }
    return Number(answer);
}