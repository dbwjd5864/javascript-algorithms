function solution(brown, yellow) {
    let answer = [];
    let totalCarpet = brown + yellow;
    let divisors = [];

    for(let i=1; i<=totalCarpet; i++){
        if(totalCarpet % i ===0){
            divisors.push(i)
        }
    }

    let leftPointer = 0;
    let middle = Math.floor(divisors.length / 2);

    for(let i=divisors.length-1; i>=middle; i--){
        let width = divisors[i];
        let height = divisors[leftPointer];

        if(brown === (width * 2 + ((height - 2) * 2))){
            answer = [width, height];
            break;
        }

        leftPointer++;
    }
    return answer;
}