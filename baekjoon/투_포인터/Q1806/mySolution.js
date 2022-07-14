// https://www.acmicpc.net/problem/1806

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

(function mySolution(){
    let [info, list] = fs.readFileSync(filePath).toString().trim().split("\n");
    const [N, S] = info.split(' ').map(Number);
    list.split(' ').map(Number);

    let left = 0;
    let right = 0;
    let answer = Number.MAX_SAFE_INTEGER;
    let sum = list[left];

    while (left < N){
        if(sum >= S){
            answer = Math.min(answer, right - left + 1);
            sum -= list[left++];
        } else if (sum < S) {

        }
    }

    console.log(answer === Number.MAX_SAFE_INTEGER ? 0 : answer);
}());