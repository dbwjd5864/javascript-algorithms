function solution(clothes) {
    let combCase = 1;

    const list = new Map();
    for(let [_, key] of clothes){
        if(list.has(key)){
            list.set(key, list.get(key) + 1);
        }
        else{
            list.set(key, 1);
        }
    }

    for(let [_, value] of list){
        combCase *= (value + 1);
    }

    return combCase - 1;
}