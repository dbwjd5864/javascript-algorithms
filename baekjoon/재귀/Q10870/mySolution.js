// https://www.acmicpc.net/problem/10870

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// 재귀만으로 풀었을 때는 런타임 오류가 생기게된다
// (function mySolution(){
//     const input = fs.readFileSync(filePath).toString().trim();
//
//     function fibonacci(num){
//         if(num === 1 || num === 2){
//             return 1;
//         }else{
//             return fibonacci(num-1) + fibonacci(num-2);
//         }
//     }
//     console.log(fibonacci(Number(input)));
//
// })();

// 메모이제이션이 필요 : 재귀의 중복 호출 문제를 동적 계획법으로 보완 가능
(function mySolution(){
    const input = fs.readFileSync(filePath).toString().trim();

    let memo = [];
    function fibonacci(num, memo){
        if(memo[num]){
            return memo[num];
        }

        if(num === 0){
            return memo[num] = 0;
        }
        else if(num === 1 || num === 2){
            return 1;
        }else{
            return fibonacci(num-1, memo) + fibonacci(num-2, memo);
        }
    }

    console.log(fibonacci(Number(input), memo));

})();