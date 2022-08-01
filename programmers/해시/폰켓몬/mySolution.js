function solution(nums) {
    let answer = 0;
    let map = new Map();
    const max = nums.length / 2;

    nums.forEach(number => {
        if(map.has(number)){
            map.set(number, map.get(number) + 1)
        }
        else{
            map.set(number, 1);
        }
    })

    answer = Math.min(max, map.size);

    return answer;
}