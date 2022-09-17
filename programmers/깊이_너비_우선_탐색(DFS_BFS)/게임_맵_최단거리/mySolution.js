function solution(maps) {
    let answer = -1;

    let queue = [];

    const dx = [-1, 0 , 1, 0];
    const dy = [0, 1, 0, -1];

    const n = maps.length;
    const m = maps[0].length;

    maps[0][0] = 0;
    queue.push([0,0,1]);

    while(queue.length){
        let [x, y, sum] = queue.shift();

        if(x === n-1 && y === m-1){
            answer = sum;
            break;
        }

        for(let k=0; k<4; k++){
            let nx = x + dx[k];
            let ny = y + dy[k];

            if(nx >= 0 && nx < n && ny>=0 && ny < m && maps[nx][ny] === 1){

                maps[nx][ny] = 0;
                queue.push([nx, ny, sum+1])
            }
        }
    }

    return answer;
}
