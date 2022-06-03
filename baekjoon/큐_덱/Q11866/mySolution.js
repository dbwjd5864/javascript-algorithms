// https://www.acmicpc.net/problem/11866

const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

(function mySolution(){
    const [n, deleteKth] = fs.readFileSync(filePath).toString().trim().split(" ");

    let answer = [];
    let index = 1;
    let ppl = Array.from({length: n}, (v,i) => i+1);

    while(ppl.length){
        if(index % deleteKth === 0){
            answer.push(ppl.shift());
        }
        else{
            ppl.push(ppl.shift());
        }
        index++;
    }

    console.log(`<${answer.join(', ')}>`);
})();