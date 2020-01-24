// solution 1: brute force

var maxProfit = function(prices) {
  
  let profitsArr = []

  for (i = 0; i < prices.length; i++) {
    for (j = i+1 ; j < prices.length; j++)
    profitsArr.push(prices[i] - prices[j])
  }

  let profit = Math.min(...profitsArr)
  
  if (profit > 0) {
    return 0
  } else {
    return Math.abs(profit)
  }

};