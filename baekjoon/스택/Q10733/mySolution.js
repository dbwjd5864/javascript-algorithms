// https://www.acmicpc.net/problem/10773

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

(function mySolution(){
    let [length, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");
    input = input.map(Number);

    let stack = [];

    input.forEach(num => {
        if(num){
            stack.push(num);
        }else{
            stack.pop();
        }
    })

    console.log(stack.reduce((a,b) => {
        return  a + b;
    }, 0));
}());