/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let sums=[]
        for( let i = 0; i <= nums.length-1; i++){
            for( let j = 0; j <= nums.length-1;j++){
                if(i==j){
                    continue;
                }
                if(nums[i]+nums[j]==target){
                    sums.push(i);
                    sums.push(j)
                    return sums ;
                }
            }
        }
};