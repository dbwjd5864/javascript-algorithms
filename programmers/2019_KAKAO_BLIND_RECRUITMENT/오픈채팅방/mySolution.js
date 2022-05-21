function solution(record) {
    let answer = [];
    let nameList = {};

    record.forEach((comment) => {
        const [key, userId, name] = comment.split(' ');

        if(key !== 'Leave'){
            nameList[userId] = name;
        }

        switch(key){
            case 'Enter':
                answer.push(`${userId}*님이 들어왔습니다.`);
                break;
            case 'Leave':
                answer.push(`${userId}*님이 나갔습니다.`);
                break;
        }
    })

    return answer.map(list => {
        const [id, comment] = list.split('*');

        return nameList[id] + comment;
    })
}