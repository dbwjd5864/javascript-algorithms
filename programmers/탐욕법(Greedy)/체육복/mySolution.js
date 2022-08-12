function solution(n, lost, reserve) {
    let clothes = new Array(n).fill(1);

    lost.map((num) => {
        return clothes[num-1]--;
    })

    reserve.map((num) => {
        return clothes[num-1]++;
    })

    for(let i=0; i<n; i++){
        if(clothes[i] === 0 && clothes[i-1] ===2){
            clothes[i]++;
            clothes[i-1]--;
        }
        else if(clothes[i] === 0 && clothes[i+1] === 2){
            clothes[i]++;
            clothes[i+1]--;
        }
    }

    return clothes.filter(num => num > 0).length;

}