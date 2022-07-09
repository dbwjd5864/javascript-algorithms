// https://www.acmicpc.net/problem/11478

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

(function mySolution(){
    const string = fs.readFileSync(filePath).toString().trim();

    const collection = new Set();

    for(let i=0; i<string.length; i++){
        for(let j=0; j<string.length; j++){

            const word = string.slice(j, i+1);
            if(word){
                collection.add(string.slice(j, i+1))
            }

        }
    }

    console.log(collection.size);
}());