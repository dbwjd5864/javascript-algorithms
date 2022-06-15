// 정확성 SUCCESS
// 효율성 SUCCESS
// 참고: https://mofari.tistory.com/entry/프로그래머스-순위-검색-javascript
function solution(info, query){
    let answer = [];
    let list = {};

    function combination(infos, score, map, start){
        let key = infos.join("");  // 키 값으로 쓸거 합쳐주기

        if(list[key]){
            list[key].push(score);
        }else{
            list[key] = [score];
        }

        // - 를 이용해 조합 만들기
        for(let i = start; i < infos.length; i++){
            let combinationArr = [...infos];
            combinationArr[i] = '-';

            combination(combinationArr, score, list, i+1);
        }
    }

    // 이분탐색
    function binarySearch(list2, key2, score2){
        let scoreArr = list2[key2];

        if(scoreArr){

            let start = 0;
            let end = scoreArr.length;

            while(start < end){
                let mid = Math.floor((start+end)/2);

                if(scoreArr[mid] >= score2){ // 현재 가르키는 값보다 내가 찾는 값이
                    end = mid;
                }else if(scoreArr[mid] < score2){
                    start = mid + 1;
                }
            }

            return scoreArr.length - start;
        }
        else return 0

    }

    // 1. -로 가능한 모든 조합 만들기
    for(let i=0; i<info.length; i++){
        let infos = info[i].split(" ");
        let score = infos.pop();

        combination(infos, score, list, 0);
    }

    // 2. 이분탐색을 위해 정렬
    for(let key in list){
        list[key].sort((score1, score2) => score1 - score2);
    }

    // 3. 이분탐색 실행
    for(let i=0; i<query.length; i++){
        let queries = query[i].replace(/ and /g, "").split(" ");
        let score = Number(queries.pop());

        answer.push(binarySearch(list, queries.join(""), score));
    }

    return answer;
}

// 처음으로 풀었으나 효율성에서 FAIL => 이분 정렬을 사용해야 한다는 것을 판단
// 정확성 SUCCESS
// 효율성 FAIL
function solution1(info, query) {
    let answer = new Array(query.length).fill(0);

    query = query.map(queryDetail => queryDetail.replace(/and\s/g, ""));

    query.forEach((queryDetail, index) => {
        const [lang, position, year, food, score] = queryDetail.split(' ');
        for(let i=0; i<info.length; i++){
            const [userLang, userPosition, userYear, userFood, userScore] = info[i].split(' ');

            if(Number(userScore) < Number(score)){
                continue;
            }
            if(lang !== '-' && lang !== userLang){
                continue;
            }
            if(position !== '-' && position !== userPosition){
                continue;
            }
            if(year !== '-' && year !== userYear){
                continue;
            }
            if(food !== '-' && food !== userFood){
                continue;
            }

            answer[index]++;

        }
    })

    return answer;
}