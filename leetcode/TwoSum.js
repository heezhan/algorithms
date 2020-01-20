//solution 1: brute force 

var twoSum = function(nums, target) {
    for (i = 0; i < nums.length; i++) {
        if nums.includes(target - nums[i]) {
            secondIndex = nums.indexOf(target - num[i])
            return [i, secondIndex]
        }
    }
};

twoSum([2,7,11,15], 9)

