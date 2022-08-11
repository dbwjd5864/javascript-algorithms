function solution(people, limit) {
    var answer = 0;

    people = people.sort((a,b) => b-a);

    for(let i=0, j=people.length-1; i<=j; i++){
        if(i === j){
            answer++;
            break;
        }

        if(people[i] + people[j] > limit){
            answer++;
        }
        else{
            answer++;
            j--;
        }
    }

    return answer;
}