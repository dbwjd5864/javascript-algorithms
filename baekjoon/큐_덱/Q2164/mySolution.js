// https://www.acmicpc.net/problem/2164

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// 자바스크립트로 링크드 리스트 만들기
// 출처: https://sleepybird.tistory.com/173
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this._size = 0;
    }

    add(value) {
        const newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
        }

        this.tail = newNode;
        this._size++;

        return newNode;
    }

    getHead() {
        return this.head.value;
    }

    removeHead() {
        this.head = this.head.next;
        this.head.prev = null;
        this._size--;
    }

    getSize() {
        return this._size;
    }
}

(function mySolution(){
    let input = fs.readFileSync(filePath).toString().trim();
    input = Number(input);

    const cards = new LinkedList(input)

    for(let i=1; i<=input; i++){
        cards.add(i);
    }

    while (cards.getSize() !== 1) {
        cards.removeHead();
        cards.add(cards.getHead());
        cards.removeHead();
    }

    console.log(cards.getHead());
})();


// 시간초과 답변
// 배열의 연산 시간상 맨 앞 요소의 삭제 & 추가하는 연산이 index 수정시간하는 시간이나 다름없다
// 따라서 매번 index 를 새로 수정하는것과 다름없기 때문에 시간초과가 뜬다
// 즉, 배열처럼 값을 빼고 넣을 때마다 인덱스를 다시 계산하지 않는 연결리스트를 만들어서 사용해야 한다
// (function mySolution(){
//     let input = fs.readFileSync(filePath).toString().trim();
//     input = Number(input);
//     const list = Array.from({length: input}, (_,i) => i+1);
//
//     while(list.length > 1){
//         list.shift();
//         list.push(list.shift());
//     }
//
//     console.log(list[0]);
// })();
