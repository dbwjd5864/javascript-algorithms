function solution(id_list, report, k) {
    // 정답 배열을 사람 리스트 수만큼 0으로 채우기
    let answer = new Array(id_list.length).fill(0);

    // 중복된 신고 리포트 제거
    report = new Set(report);

    // 유저가 신고한 ID
    let summary = {};
    let reportedCount = {};

    for(list of report){
        const [key, value] = list.split(' ');
        if(!summary[key]){
            summary[key] = [];
        }
        summary[key].push(value);
    }

    Object.values(summary).map(list => {
        for(person of list){
            if(!reportedCount[person]){
                reportedCount[person] = 0;
            }
            reportedCount[person]++;
        }
    })

    for(key in reportedCount){
        if(reportedCount[key] >= k){
            Object.entries(summary).map(([id, list]) => {

                if(list.find(user => user === key)){
                    const index = id_list.findIndex(user => user === id)
                    answer[index]++;
                }
            })
        }
    }

    return answer;
}