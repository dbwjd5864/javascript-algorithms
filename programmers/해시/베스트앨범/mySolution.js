function solution(genres, plays) {
    let answer = [];

    let list = new Map();
    let order = [];
    for(let [index, key] of genres.entries()){
        if(list.has(key)){
            list.set(key, {...list.get(key), [index]: plays[index]})
            order[key] += plays[index];
        }else{
            list.set(key, {[index]: plays[index]})
            order[key] = plays[index];
        }
    }

    const sortedOrder = Object.entries(order).sort((a,b) => {
        return b[1] - a[1]
    })

    for(let [key] of sortedOrder){
        Object.entries(list.get(key)).sort((a,b) => b[1] - a[1]).map(([uniqNum, count], index) => {
            if(index < 2){
                answer.push(Number(uniqNum))
            }
        })

    }

    return answer;
}