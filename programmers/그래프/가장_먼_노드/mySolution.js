function solution(n, edge) {
    let graph = Array.from({length: n+1}, () => []);
    let checked = Array.from({length: n+1}, () => 0);
    let queue = [1];

    edge.forEach(([a, b]) => {
        graph[a].push(b);
        graph[b].push(a);
    })

    checked[1] = 1;

    while(queue.length){
        let node = queue.shift();

        graph[node].forEach(n => {
            if(!checked[n]){
                queue.push(n);
                checked[n] = checked[node] + 1;
            }
        })
    }

    const max = Math.max(...checked);
    return checked.filter(count => count === max).length

    return answer;
}