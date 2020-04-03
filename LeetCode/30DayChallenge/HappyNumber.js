var isHappy = function(n, counter = 0) {
  
    if (counter < 8) {
      let str = n.toString()
      let squares = []
      let sum = 0
      
      for (let i = 0; i < str.length; i++) {
        squares.push(str[i] * str[i])
      }
  
      sum = squares.reduce((a, b) => a + b)
  
      if (sum === 1) {
        return true
      } else {
        counter += 1
        isHappy(sum, counter)
      }
    }
  
    return false 
};