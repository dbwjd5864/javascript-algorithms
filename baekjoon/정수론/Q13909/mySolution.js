const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

(function mySolution(){
    const n = fs.readFileSync(filePath).toString().trim();

    let answer = 0;

    // 열려 있다 = 열고 닫은 횟수가 홀수번을 의미
    // n의 약수가 홀수개여야 하고 그런 수는 제곱수이다
    for(let i=1; i*i<=parseInt(n); i++){
        answer++;
    }

    console.log(answer);

}());