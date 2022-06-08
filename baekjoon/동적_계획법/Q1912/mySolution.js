// https://www.acmicpc.net/problem/1904

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

(function mySolution(){
    let [n, inputArray] = fs.readFileSync(filePath).toString().trim().split("\n");
    inputArray = inputArray.split(' ');

    let dp = Array.from({length: Number(n)}, () => 0);

    for(let i=0; i<dp.length; i++){
        for(let j=1; i<=j; j++){

        }

    }


    console.log();
})();