// Given an array of integers, find if the array contains any duplicates.

// Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

// solution 1
var containsDuplicate = function(nums) {
    let obj = {}

    for (i = 0; i < nums.length; i++) {
        if (obj.hasOwnProperty(nums[i])) {
            return true 
        } else {
            obj[nums[i]] = 0
        }
    }

    return false 
};
