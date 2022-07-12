// https://www.acmicpc.net/problem/1764

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

(function mySolution(){
    let [lengths, ...stringLists] = fs.readFileSync(filePath).toString().trim().split("\n");
    const [collectionLength, listLength] = lengths.trim().split(" ").map(num => Number(num));

    let answer = 0;
    const answerList = [];
    const collection = new Set();

    for(let i=0; i<collectionLength; i++) {
        collection.add(stringLists[i]);
    }

    for(let i=0; i<listLength; i++){
        if(collection.has(stringLists[i+collectionLength])){
            answer++;
            answerList.push(stringLists[i+collectionLength])
        }
    }

    console.log(answer);
    console.log(answerList.join('\n'));
}());