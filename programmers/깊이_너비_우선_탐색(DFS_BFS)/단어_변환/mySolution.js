function solution(begin, target, words) {
    let answer = 0;
    let visited = [];
    let queue = [];

    if(!words.includes(target)) return answer;

    queue.push([begin, 0]);

    while(queue.length){
        const [current, count] = queue.shift();

        if(current === target){
            answer = count;
            break;
        }

        words.forEach(word => {
            let notEqual = 0;

            if(!visited.includes(word)){
                for(let i=0; i<word.length; i++){
                    if(current[i] !== word[i]){
                        notEqual++;
                    }
                }

                if(notEqual === 1){

                    visited.push(word)
                    queue.push([word, count+1]);
                }
            }
        })

    }

    return answer;
}