function solution(N, stages) {
    let answer = [];

    let chart = stages.reduce((acc, curr) => {
        acc[curr] = acc[curr] ? acc[curr]+1 : 1;
        return acc
    }, {})

    for(let i=1; i<=N; i++){
        chart[i] = chart[i] ? chart[i] : 0;
    }

    delete chart[N+1];
    let chartCopy = {...chart};

    for(let i=1; i<N+1; i++){
        let people = stages.length;
        for(let j=0; j<Object.keys(chart).length; j++){
            if(Object.keys(chart)[j] < i){
                people = people - Object.values(chartCopy)[j]
            }
        }
        chart[i] = chart[i] / people;
    }

    let obj = Object.keys(chart).map((element) => {
        return [element, chart[element]]
    })

    obj.sort((a,b) => b[1] - a[1]);
    for(let i=0; i<obj.length; i++){
        answer.push(parseInt(obj[i][0]))
    }
    return answer;
}