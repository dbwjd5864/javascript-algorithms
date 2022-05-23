function solution(str1, str2) {
    let str1Element = [];
    let str2Element = [];

    let commonElement = [];
    let allElement = [];

    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();

    for(let i=0; i<str1.length-1; i++){
        if((str1[i] >= 'a' &&  str1[i] <= 'z') && (str1[i+1] >= 'a' &&  str1[i+1] <= 'z')){
            str1Element.push(str1[i]+str1[i+1]);
        }
    }

    for(let j=0; j<str2.length-1; j++){
        if((str2[j] >= 'a' &&  str2[j] <= 'z') && (str2[j+1] >= 'a' &&  str2[j+1] <= 'z')){
            str2Element.push(str2[j]+str2[j+1]);
        }
    }

    str1Element.forEach((element, i) => {
        const index = str2Element.findIndex(elem => elem === element);
        if(index > -1){
            commonElement.push(element);
            allElement.push(element);
            str2Element.splice(index, 1);
        }else{
            allElement.push(element);
        }
        if(i === str1Element.length-1){
            allElement = allElement.concat(str2Element);
        }
    })

    if(!str1Element.length && !str2Element.length){
        return 1 * 65536;
    }
    else if(!commonElement.length){
        return 0;
    }
    else{
        return Math.floor((commonElement.length / allElement.length) * 65536)
    }
}