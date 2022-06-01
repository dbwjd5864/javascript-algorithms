// https://www.acmicpc.net/problem/10828

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

(function mySolution(){
    const [n, ...inputArr] = fs.readFileSync(filePath).toString().trim().split("\n");

    let answer = [];
    let stack = [];
    inputArr.map((input)=> {
        const [command, num] = input.split(" ");
        switch (command){
            case "push":
                stack.push(num);
                break;
            case "pop":
                if(!stack[stack.length-1]){
                    answer.push(-1);
                }
                else{
                    answer.push(stack.pop());
                }
                break;
            case "size":
                answer.push(stack.length);
                break;
            case "empty":
                if(stack.length){
                    answer.push(0);
                }
                else{
                    answer.push(1);
                }
                break;
            case "top":
                if(!stack[stack.length-1]){
                    answer.push(-1);
                }
                else{
                    answer.push(stack[stack.length-1]);
                }
                break;
        }
    })

    console.log(answer.join('\n'));
})();
