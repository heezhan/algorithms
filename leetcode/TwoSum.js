var twoSum = function(nums, target) {
    let obj = {}

    for (var i = 0; i < nums.length; i++) {
        obj[nums[i]] = i
    }

    for (var i = 0; i < nums.length; i++) {
        let diff = target - nums[i]

        if (obj[diff] && obj[diff] !== i) {
        return [i, obj[diff]]
        }
    }
}

twoSum([2,7,11,15], 9)