// https://www.acmicpc.net/problem/10816

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

(function mySolution(){
    const [cardLength, cardLists, ownCardLength, ownCardLists ] = fs.readFileSync(filePath).toString().trim().split("\n");
    const cardListArr = cardLists.trim().split(" ");
    const ownCardListArr = ownCardLists.trim().split(" ");

    const answer = [];
    const map = new Map();

    cardListArr.map(card => {
        if(map.has(card)){
            map.set(card, map.get(card)+1);
        }
        else{
            map.set(card, 1)
        }
    })

    ownCardListArr.map(card => {
        if(map.has(card)){
            answer.push(map.get(card));
        }
        else{
            answer.push(0);
        }
    })

    console.log(answer.join(' '));
}());