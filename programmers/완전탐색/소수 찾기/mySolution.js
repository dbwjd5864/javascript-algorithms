function isPrime(num){
    if(num === 0 || num === 1){
        return false;
    }

    for(let i=2; i<=Math.sqrt(num); i++){
        if(num % i === 0){
            return false;
        }
    }
    return true;
}

function solution(numbers) {
    let numList = numbers.split("");
    const answer = new Set();

    function permutation(numList, currentNum){
        for(let i=0; i<numList.length; i++){
            const temp = numList.slice();
            temp.splice(i, 1);
            const num = currentNum + numList[i];

            if (isPrime(parseInt(num))) {
                answer.add(parseInt(num))
            }


            permutation(temp, num);
        }
    }
    permutation(numList, "")

    return answer.size;
}