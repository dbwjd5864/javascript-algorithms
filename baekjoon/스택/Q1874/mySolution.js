// https://www.acmicpc.net/problem/1874

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

(function mySolution(){
    let [length, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");
    input = input.map(Number);
    const answer = [];
    let stack = [];

    let j = 1;
    for(let i=0; i<input.length; i++){
        let num = input.shift();

            while(j <= num) {
                stack.push(j++);
                answer.push("+");
            }

            const poppedItem = stack.pop();
            if(poppedItem !== num){
                return 'NO';
            }
            answer.push("-")
    }

    console.log(answer.join('\n'));
}());