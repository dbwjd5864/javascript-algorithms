function solution(answers) {
    let answer = [];

    let person1 = [1, 2, 3, 4, 5];
    let person2 = [2, 1, 2, 3, 2, 4, 2, 5];
    let person3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    let correct = [0,0,0];

    for(let i=0; i<answers.length; i++){
        if(answers[i] === person1[i % 5]) correct[0]++
        if(answers[i] === person2[i % 8]) correct[1]++
        if(answers[i] === person3[i % 10]) correct[2]++
    }

    let max = Math.max(correct[0],correct[1],correct[2]);
    for(let i=0; i<correct.length; i++){
        if(correct[i] >= max){
            max = correct[i]
            answer.push(i+1)
        }
    }

    return answer;
}