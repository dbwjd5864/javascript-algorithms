function checkPrime(num){
    if(num === "1"){
        return false;
    }

    num = parseInt(num);
    for(let i=2; i <= Math.sqrt(num); i++){
        if(num % i === 0){
            return false;
        }
    }
    return true;
}

// String.toString(baseNum) 을 이용하면 반복문 없이도 해당 baseNum에 해당하는 진수로 변환가능
// ex) n.toString(k)

function solution(n, k) {
    let answer = 0;
    let numToKBase = '';

    while(n / k > 0){
        numToKBase = (n % k) + numToKBase;
        n = Math.floor(n / k);
    }

    let prime = "";
    let firstIndex = 0;
    for(let i=0; i<numToKBase.length; i++){
        if(numToKBase[i] === "0"){
            firstIndex = i+1;
            prime = '';
            continue;
        }

        prime += numToKBase[i];
        if(checkPrime(prime)){
            if((numToKBase[firstIndex - 1] === "0" && numToKBase[i+1] === "0") || (!numToKBase[firstIndex - 1] && numToKBase[i+1] === "0") || (numToKBase[firstIndex - 1] === "0" && !numToKBase[i+1]) || (!numToKBase[firstIndex - 1] && !numToKBase[i+1])){
                answer++;
                firstIndex = i+1;
                prime = '';
            }
        }
    }

    return answer;
}