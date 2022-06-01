// https://www.acmicpc.net/problem/9012

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

(function mySolution(){
    const [n, ...inputArr] = fs.readFileSync(filePath).toString().trim().split("\n");

    let answer = [];
    let stack = [];
    inputArr.map((input)=> {
        input = input.split("");
        while(input.length){
            if(stack[stack.length-1] === "(" && input[0] === ")"){
                stack.pop();
                input.shift();
            }
            else{
                stack.push(input.shift());
            }
        }

        if(!stack.length){
            answer.push("YES");
        }else{
            answer.push("NO");
        }

        stack = [];
    })

    console.log(answer.join('\n'));
})();
