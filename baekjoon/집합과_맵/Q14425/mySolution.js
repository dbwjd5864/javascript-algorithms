// https://www.acmicpc.net/problem/14425

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

(function mySolution(){
    const [lengths, ...stringLists] = fs.readFileSync(filePath).toString().trim().split("\n");
    const [collectionLength, listLength] = lengths.trim().split(" ").map(num => Number(num));

    let answer = 0;
    const collection = new Map();

    for(let i=0; i<collectionLength; i++) {
        collection.set(stringLists[i], 1);
    }

    for(let i=0; i<listLength; i++){
        if(collection.has(stringLists[i+collectionLength])){
            answer++;
        }
    }

    console.log(answer);
}());