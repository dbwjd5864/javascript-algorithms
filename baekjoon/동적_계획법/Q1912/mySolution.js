// https://www.acmicpc.net/problem/1912

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

(function mySolution(){
    let [n, inputArray] = fs.readFileSync(filePath).toString().trim().split("\n");
    inputArray = inputArray.split(' ').map(num => Number(num));

    let dp = Array.from({length: Number(n)}, () => 0);
    dp[0] = Number(inputArray[0]);

    for(let i=1; i<dp.length; i++){
        if(inputArray[i] > inputArray[i] + dp[i-1]){
            dp[i] = inputArray[i];
        }
        else {
            dp[i] = inputArray[i] + dp[i - 1];
        }
    }

    console.log(Math.max(...dp));
})();