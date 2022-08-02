// 우선순위 큐
const PriorityQueue = class PriorityQueue{
    constructor(){
        this.heap = [];
    }

    enqueue(priority){
        this.heap.push(priority);
        this.heapifyUp();
    }

    dequeue(){
        // 제거 전 heap의 길이
        const heapLength = this.heap.length;
        // 루트 노드 = return 값
        const rootNode = this.heap[0];

        // 루트 노드를 제거한 후 힙 트리에 노드가 없다면 프로세스 종료
        if (heapLength <= 0){
            return;
        }else if(heapLength === 1) {
            this.heap = [];
        }else{
            // 가장 마지막 노드를 루트 노드로 변경 후 다시 정렬
            this.heap[0] = this.heap.pop();
            this.heapifyDown();
        }

        return rootNode;
    }

    heapifyUp(){
        // 새롭게 추가된 노드의 인덱스
        let currentIdx = this.heap.length - 1;
        const insertedNode = this.heap[currentIdx];

        // 새롭게 추가된 노드가 루트에 위치하면 더 이상 부모 노드가 없으므로 반복을 중단
        while(currentIdx > 0){
            // 추가된 노드의 부모 인덱스
            const parentIndex = Math.floor((currentIdx - 1) / 2);

            if(this.heap[currentIdx] < this.heap[parentIndex]){
                this.heap[currentIdx] = this.heap[parentIndex];
                currentIdx = parentIndex;
            }else{
                break;
            }
        }

        this.heap[currentIdx] = insertedNode
    }

    heapifyDown(){
        // 처음 시작은 루트 노드 인덱스
        let currentIndex = 0;

        const heapLength = this.heap.length;
        const rootNode = this.heap[0];

        // 힙 구조상 왼쪽 노드가 먼저 채워지므로 왼쪽 노드가 없을때까지만 비교
        while(currentIndex * 2 + 1  < heapLength){
            const leftChildIndex = currentIndex * 2 + 1;
            const rightChildIndex = currentIndex * 2 + 2;

            let smallerChildIndex = leftChildIndex;
            // 왼쪽 노드와 오른쪽 노드 중 더 작은 값 찾기
            if(rightChildIndex < heapLength && this.heap[rightChildIndex] < this.heap[leftChildIndex]){
                smallerChildIndex = rightChildIndex;
            }

            // 현재 노드가 선택된 왼쪽 자식 혹은 오른쪽 자식 보다 값이 작은지 확인
            if(this.heap[smallerChildIndex] < this.heap[currentIndex]){
                this.heap[currentIndex] = this.heap[smallerChildIndex];
                currentIndex = smallerChildIndex;
            }
            else{
                break;
            }
        }

        this.heap[currentIndex] = rootNode;
    }

    getLength(){
        return this.heap.length;
    }
}

module.exports = PriorityQueue;