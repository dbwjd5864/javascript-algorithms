function solution(s) {
    let wordList = [];
    let minSentenceLength = Number.MAX_VALUE;

    if(s.length === 1){
        return 1;
    }

    for(let i=1; i<= s.length / 2; i++){
        let originalSentence = s;

        while(originalSentence.length){
            wordList.push(originalSentence.substr(0, i))
            originalSentence = originalSentence.slice(i);
        }

        let pivot = 0;
        let pointer = 1;
        let duplicateCount = 1;
        let compactedString = '';

        while(pivot < wordList.length){
            if(wordList[pivot] === wordList[pointer]){
                duplicateCount++;
                pointer++;
            }
            else{
                if(duplicateCount === 1){
                    compactedString += wordList[pivot];
                }
                else{
                    compactedString += (duplicateCount + wordList[pivot])
                }

                pointer++;
                pivot = pointer - 1;
                duplicateCount = 1;
            }

        }

        if(minSentenceLength > compactedString.length){
            minSentenceLength = compactedString.length;
        }

        wordList = [];
    }
    return minSentenceLength;
}