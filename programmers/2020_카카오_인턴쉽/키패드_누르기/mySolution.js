
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
function calcDistance(handPosition, numPosition){
    return Math.abs(handPosition[0] - numPosition[0]) + Math.abs(handPosition[1] - numPosition[1]);
}

function solution(numbers, hand) {
    let answer = '';
    let pad = {
        1: [0,0], 2: [0,1], 3: [0,2],
        4: [1,0], 5: [1,1], 6: [1,2],
        7: [2,0], 8: [2,1], 9: [2,2],
        "*": [3,0], 0: [3,1], "#": [3,2],
    };
    let leftPosition = [3,0];
    let rightPosition = [3,2];

    numbers.forEach(num => {
        const position = pad[num];

        if(position[1] === 0){
            answer += "L";
            leftPosition = position;
        }
        else if(position[1] === 2){
            answer += "R";
            rightPosition = position;
        }
        else{
            const leftDistance = calcDistance(leftPosition, position);
            const rightDistance = calcDistance(rightPosition, position);

            if(leftDistance === rightDistance){
                if(hand === 'left'){
                    leftPosition = position;
                    answer += "L";
                }else{
                    rightPosition = position;
                    answer += "R";
                }
            }else{
                if(leftDistance < rightDistance){
                    leftPosition = position;
                    answer += "L";
                }else{
                    rightPosition = position;
                    answer += "R";
                }
            }
        }
    });

    return answer;
}