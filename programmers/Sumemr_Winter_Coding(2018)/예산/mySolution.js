function solution(d, budget) {
    let answer = 0;

    d.sort((a,b) => a-b).reduce((a, b) => {
        if(a+b <= budget){
            answer++;
            return a+b
        }
    }, 0)


    return answer;
}