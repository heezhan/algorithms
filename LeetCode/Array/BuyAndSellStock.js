var maxProfit = function(prices) {
    let min = prices[0]
    let maxProf = 0
    
    for (i = 1; i < prices.length; i++) {
        min = Math.min(min, prices[i])
    
        maxProf = Math.max(maxProf, prices[i] - min)
    }
    
    return maxProf
};

