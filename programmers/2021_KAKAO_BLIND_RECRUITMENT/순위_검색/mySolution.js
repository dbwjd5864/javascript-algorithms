// 정확성 SUCCESS
// 효율성 SUCCESS
function solution(info, query){

}

// 처음 으로 풀었으나 효율성에서 FAIL => 이분 정렬을 사용해야 한다는 것을 판단
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