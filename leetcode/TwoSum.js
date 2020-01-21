//solution 1: brute force 

var twoSum = function(nums, target) {
    for (i = 0; i < nums.length; i++) {
        if nums.includes(target - nums[i]) {
            secondIndex = nums.indexOf(target - num[i])
            return [i, secondIndex]
        }
    }
};

var twoSum = function(nums, target) {

    obj = {}

    for ( i = 0; i < nums.length; i++ ) {
        obj[ nums[i] ] = i
    } //create an object with keys representing the numbers in the array and the corresponding values representing the indices of those numbers 

    for ( i = 0; i < nums.length; i++ ) {
        let complement = target - nums[i]
        if ( obj[complement] ) {
        return [ obj[nums[i]], obj[complement] ]
        } else {
        return "n/a"
        }
    } //reference the object instead of the array to find 1. the existence of a complementary value, and if true, 2. the indices of the twoSum pair

}

twoSum([2,3,11,15], 9)
