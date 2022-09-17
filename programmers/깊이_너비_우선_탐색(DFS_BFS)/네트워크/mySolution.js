function solution(n, computers) {
    let answer = 0;
    let checked = Array.from({length: n}).fill(0);

    function dfs(index){
        checked[index] = 1;
        for(let i=0; i<computers.length; i++){
            if(checked[i] !== 1 && computers[index][i] === 1){
                dfs(i);
            }
        }
    }

    for (let i=0; i < computers.length; i++) {
        if (checked[i] === 0) {
            dfs(i)
            answer++;
        }
    }

    return answer;
}