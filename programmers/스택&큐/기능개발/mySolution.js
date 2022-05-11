function day(progress, speed){
    let leftProg = 100 - progress;
    return Math.ceil(leftProg / speed);
}

function solution(progresses, speeds) {
    let daysCompleted = [];
    let lastDay = 0;
    let answer = [];

    for(let i in progresses){
        daysCompleted.push(day(progresses[i], speeds[i]));
    }

    for(let i in daysCompleted){
        if(daysCompleted[i] > lastDay){
            answer.push(1);
            lastDay = daysCompleted[i];
        }
        else{
            answer[answer.length-1]++;
        }
    }

    return answer;
}
