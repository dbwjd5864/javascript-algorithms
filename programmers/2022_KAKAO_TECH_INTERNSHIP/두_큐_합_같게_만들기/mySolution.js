function solution(queue1, queue2) {

    const array = [...queue1, ...queue2];
    const sum = (arr) => arr.reduce((a,b) => a+b, 0);

    const targetNum = sum(array) / 2;

    let count = 0;
    let start = 0;
    let end = queue1.length;
    let sumNum = sum(array.slice(start, end));

    while(count < 4 * array.length){
        if(sumNum > targetNum){
            sumNum -= array[start];
            start++;
        }else if(sumNum < targetNum){
            sumNum += array[end];
            end++;
        }else if(targetNum === sumNum){
            return count;
        }
        count++;
    }

    return -1;
}