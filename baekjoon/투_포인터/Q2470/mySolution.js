// https://www.acmicpc.net/problem/2470

const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

(function mySolution(){
    const [_, input] = fs.readFileSync(filePath).toString().trim().split("\n");
    const inputArr = input.trim().split(" ").map(num => Number(num)).sort((a, b)=> a-b);

    let lp = 0;
    let rp = inputArr.length - 1;
    let min = Number.MAX_SAFE_INTEGER;

    let answerLeft = inputArr[lp];
    let answerRight = inputArr[rp];

    while(lp < rp){
        const sum = inputArr[lp] + inputArr[rp];

        if(Math.abs(sum) < Math.abs(min)){
            min = sum;
            answerLeft = inputArr[lp];
            answerRight = inputArr[rp];
        }

        if(sum > 0){
            rp--;
        }else{
            lp++;
        }
    }

    console.log(answerLeft, answerRight);
})();