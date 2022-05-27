function solution(numbers, target) {
    let answer = 0;

    function DFS(sum, index){

        if(index > numbers.length) return;

        if(index === numbers.length && sum === target){
            answer++;
        }else{
            DFS(sum+numbers[index], index+1);
            DFS(sum-numbers[index], index+1);

        }

    }

    DFS(0, 0);

    return answer;
}