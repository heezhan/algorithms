// You are given coins of different denominations and a total amount of money amount. Write a function to compute the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

// Total number of combinations possible with the given coins for a given amount 
var coinChange = function(coins, amount) {
    let combos = [1]
  
    for (let i = 0; i < coins.length; i++) {
      for (let j = 1; j < amount + 1; j++) {
        if (coins[i] <= j) {
          if (combos[j]) {
            combos[j] += combos[j - coins[i]]
          } else {
            combos[j] = combos[j - coins[i]]
          }
        } 
      }
    }
  
    return combos[amount]
};

// Account for edge cases such as given 0 coins with an amount (then the possible combination is 0 or "none"), given coins but 0 amount ("none"), or given 0 coins with 0 amount ("none")