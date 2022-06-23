// https://www.acmicpc.net/problem/24479
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

//dfs(V, E, R) {  # V : 정점 집합, E : 간선 집합, R : 시작 정점
//     visited[R] <- YES;  # 시작 정점 R을 방문 했다고 표시한다.
//     for each x ∈ E(R)  # E(R) : 정점 R의 인접 정점 집합.(정점 번호를 오름차순으로 방문한다)
//         if (visited[x] = NO) then dfs(V, E, x);
// }

(function mySolution(){
    let [info, ...connection] = fs.readFileSync(filePath).toString().split("\n");
    const [nodeCount, lineCount, startNode] = info.split(" ");
    connection = connection.map(info => info.trim().split(" "));

    let answer = [];
    let graph = Array.from({length: Number(nodeCount)+1}, () => []);
    let visited = Array.from({length: Number(nodeCount)+1}, () => 0);

    graph = connection.map((info) => {
        console.log(info)
    })


    console.log(answer.join('\n'));
})();

