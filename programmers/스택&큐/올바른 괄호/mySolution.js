function solution(s){
    let answer = true;
    let stack = [];
    const signList = s.split("");


    signList.map((sign,index) => {
        if(sign === '('){
            stack.push(signList[index]);

        }
        else if(sign === ')' && stack[stack.length-1] === '('){
            stack.pop();

        }
        else{
            answer = false;
            return;
        }
    })

    if(stack.length){
        answer = false;
    }

    return answer;
}