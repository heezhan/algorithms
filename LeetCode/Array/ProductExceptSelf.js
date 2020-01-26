// Given an array nums of n integers where n > 1, return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

// Note: Please solve it without division and in O(n).

// Follow up:
// Could you solve it with constant space complexity? (The output array does not count as extra space for the purpose of space complexity analysis.)

//solution 1
//three arrays, three for loops
var productExceptSelf = function(nums) {
    let left = []
    let right = []
    let product = []
  
    left[0] = 1
    right[nums.length - 1] = 1
  
    for (i = 1; i < nums.length; i++) {
      left[i] = nums[i - 1] * left[i - 1]
    }
  
    for (i = nums.length - 2; i >= 0; i--) {
      right[i] = nums[i + 1] * right[i + 1]
    }
  
    for (i = 0; i < nums.length; i++) {
      product[i] = left[i] * right [i]
    }
  
    return product 
}

//solution 2
//one array, two for loops
var productExceptSelf = function(nums) {
    let answer = []
  
    answer[0] = 1
    for (i = 1; i < nums.length; i++) {
      answer[i] = nums[i - 1] * answer [i - 1]
    }
  
    let right = 1
    for (i = nums.length - 1; i >= 0; i--) {
      answer[i] = answer[i] * right 
        
      right *= nums[i]
    }
  
    return answer 
  }
  