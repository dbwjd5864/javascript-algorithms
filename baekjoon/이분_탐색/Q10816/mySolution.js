// https://www.acmicpc.net/problem/10816

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

(function mySolution(){
    const [cardLength, cardArray, ownCardsLength, ownCards] = fs.readFileSync(filePath).toString().trim().split("\n");

    console.log({cardLength, cardArray, ownCardsLength, ownCards});
    let answer = [];


    console.log(answer.join(' '));
})();
