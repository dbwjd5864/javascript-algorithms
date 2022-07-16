// https://www.acmicpc.net/problem/10773

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

(function mySolution(){
    let [length, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");
    input = input.map(Number);
    const answer = [];
    let stack = [];

    console.log(answer.join('\n'));
}());