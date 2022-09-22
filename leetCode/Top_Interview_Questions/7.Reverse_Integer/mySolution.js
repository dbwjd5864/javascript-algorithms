// https://leetcode.com/problems/reverse-integer/

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let isNegative = x < 0;
    let result = Math.abs(x).toString().split("").reverse().join("");

    if(result < Math.pow(-2, 31) || result > Math.pow(2,31)-1){
        return 0;
    }
    else if(isNegative){
        return -result;
    }

    return result;
};