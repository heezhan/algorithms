var singleNumber = function(nums) {
    let hash = {}
  
    for (i = 0; i < nums.length; i++) {
      if (hash[nums[i]] === 1) {
        hash[nums[i]] += 1
      } else {
        hash[nums[i]] = 1
      }
    }
  
    return Object.keys(hash).find(key => hash[key] === 1)
};
  
singleNumber([4,1,2,1,2])