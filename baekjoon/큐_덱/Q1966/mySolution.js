// https://www.acmicpc.net/problem/1966

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

(function mySolution(){
    let [testCaseCount, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");
    const answer = [];

    for(let i=0; i<input.length; i+=2){
        let [count, targetLocation] = input[i].split(" ");
        targetLocation = Number(targetLocation);
        let priorities = input[i+1].split(" ").map(Number);
        let printCount = 0;

        while(true){
            const max = Math.max(...priorities);
            const num = priorities.shift();

            if(max === num){
                printCount++;
                if(targetLocation === 0){
                    answer.push(printCount);
                    break;
                }
            }else{
                priorities.push(num);
            }

            if(targetLocation === 0){
                targetLocation = priorities.length - 1;
            }
            else{
                targetLocation--;
            }
        }
    }

    console.log(answer.join('\n'));
}());