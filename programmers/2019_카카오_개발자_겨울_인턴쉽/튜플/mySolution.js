function solution(s) {
    let answer = [];
    s = s.replace(/{|}/g,'')
        .split(',')

    let obj = s.reduce(function (acc, curr) {
        acc[curr] = acc[curr] ? acc[curr] + 1 : 1;

        return acc;
    }, {});

    obj = Object.entries(obj)
        .sort((a,b) => b[1]-a[1])
        .map(element => answer.push(parseInt(element[0])))


    return answer;
}