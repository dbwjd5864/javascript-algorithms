// https://www.acmicpc.net/problem/2839
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

(function mySolution(){
    let input = Number(fs.readFileSync(filePath).toString().trim());
    let answer = 0;

    while(input > 0){
        if(input % 5 === 0){
            answer += Math.floor(input / 5);
            input = 0;
        }
        else{
            answer += 1;
            input = input - 3;
        }
    }

    if(input < 0){
        answer = -1;
    }

    console.log(answer);
})();