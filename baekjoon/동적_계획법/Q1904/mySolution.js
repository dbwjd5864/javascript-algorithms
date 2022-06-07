// https://www.acmicpc.net/problem/1904

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

(function mySolution(){
    const input = Number(fs.readFileSync(filePath).toString().trim());

    let dp = Array.from({length: input + 1}, () => 0);
    dp[1] = 1;
    dp[2] = 2;

    for(let i=3; i<dp.length; i++){
        dp[i] = (dp[i-1] + dp[i-2])% 15746;
    }

    console.log(dp[input]);
})();

//  n = 1 : 1
//  n = 2 : 00, 11
//  n = 3 : 001, 100, 111
//  n = 4 : 0000, 1111, 0011, 1001, 1100
//  n = 5 : 11111, 00001, 00100, 10000, 11100, 11001, 10011, 00111
