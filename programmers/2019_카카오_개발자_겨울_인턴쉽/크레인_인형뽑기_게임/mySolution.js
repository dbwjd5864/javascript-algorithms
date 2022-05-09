function solution(board, moves) {
    let select = [];
    let result = 0;

    for(let i=0; i<moves.length; i++){
        for(let j=0; j<board.length; j++){
            if(board[j][moves[i]-1] != 0){
                if(select[select.length-1] != board[j][moves[i]-1]){
                    select.push(board[j][moves[i]-1]);
                }
                else{
                    select.pop();
                    result += 2;
                }

                board[j][moves[i]-1] = 0;
                break;
            }
        }
    }

    return result;
}