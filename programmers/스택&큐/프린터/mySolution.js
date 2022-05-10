function solution(priorities, location) {
    let answer = 0;
    let queue = [...Array(priorities.length)].map((_, i) => String.fromCharCode(i + 65));
    let targetAlphabet = queue[location];

    while(queue.length){
        if(priorities.find(order => order > priorities[0])){
            priorities.push(priorities.shift());
            queue.push(queue.shift());
        }
        else{
            answer++;

            if(queue[0] === targetAlphabet){
                break;
            }
            priorities.shift();
            queue.shift();
        }
    }

    return answer;
}