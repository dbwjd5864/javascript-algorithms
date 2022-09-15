// https://leetcode.com/problems/two-sum/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

    const map = new Map();
    nums.map((num, index) => {
        map.set(num, index);

    })

    for(let i=0; i< nums.length; i++){
        if(map.has(target-nums[i]) && map.get(target-nums[i]) !== i){
            return [i, map.get(target - nums[i])]
        }

    }

};