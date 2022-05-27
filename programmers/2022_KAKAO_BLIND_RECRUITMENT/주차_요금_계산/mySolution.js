function solution(fees, records) {
    let answer = [];
    const [baseTime, baseFee, unitTime, unitFee] = fees;

    records.sort((a,b) => {
        const carA = a.split(' ');
        const carB = b.split(' ');

        return Number(carA[1]) - Number(carB[1])
    })

    if(records.length === 1){
        let [time, carNum] = records[0].split(' ');
        let [hour, min] = time.split(":");
        const mins = (23 - hour) * 60 + (59 - min);

        if(mins > baseTime){
            return [baseFee + Math.ceil((mins-baseTime)/unitTime) * unitFee];
        }
        else{
            return [baseFee];
        }
    }

    let accTime = 0;
    while(records.length >= 1){
        let lp = 0;
        let rp = 1;
        let [timeL, carNumL, typeL] = records[lp].split(' ');
        let [hourL, minL] = timeL.split(":");
        let timeR, carNumR, typeR;
        let hourR, minR;

        if(records[rp]){
            [timeR, carNumR, typeR] = records[rp].split(' ');
            [hourR, minR] = timeR.split(":");
        }

        if(carNumL === carNumR){
            if(typeL === 'IN' && typeR === 'OUT'){
                accTime += (hourR - hourL) * 60 + (minR - minL);
            }
        }else {
            if(typeL === 'IN'){
                accTime += (23 - hourL) * 60 + (59 - minL);
            }

            if(accTime > baseTime){
                answer.push(baseFee + Math.ceil((accTime-baseTime)/unitTime) * unitFee)
            }
            else{
                answer.push(baseFee);
            }

            accTime = 0;
        }

        records.shift();
    }

    return answer;
}