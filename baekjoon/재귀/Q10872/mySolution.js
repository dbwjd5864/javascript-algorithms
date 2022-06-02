// https://www.acmicpc.net/problem/10872

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

(function mySolution(){
    const input = fs.readFileSync(filePath).toString().trim();

    let answer = 1;

    function multifly(num){
        if(num === 0){
            return;
        }else{
            answer *= num;
            multifly(num-1);
        }
    }
    multifly(Number(input));

    console.log(answer);
})();
