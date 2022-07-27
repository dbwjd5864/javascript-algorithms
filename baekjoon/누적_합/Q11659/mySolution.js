// https://www.acmicpc.net/problem/11659
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

(function mySolution(){
    const input = fs.readFileSync(filePath).toString().trim().split("\n");
    const listArray = input[1].split(" ").map(Number);
    const sum = Array.from({length: listArray.length + 1}, () => 0);

    const fromTo = input.slice(2);

    const answer = [];

    listArray.forEach((num, index) => {
        sum[index+1] = sum[index] + num;
    });

    fromTo.map(order => {
        const [i, j] = order.split(" ").map(Number);
        answer.push(sum[j] - sum[i-1]);
    })

    console.log(answer.join('\n'));
})();

