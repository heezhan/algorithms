//You are climbing a stair case. It takes n steps to reach to the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

var climbStairs = function(n) {      
    let arr = [1, 1]
    
    if (n > 1) {
        for (let i = 0; i < n-1; i++) {
            let nextNum = arr[i] + arr[i+1]
            arr.push(nextNum)
        } 
        return arr[n]
    } else if (n === 1) {
        return arr[n]
    } else {
        return "n/a"
    }
}

var climbStairs = function(n) {      
    let arr = [1, 1]
    
    if (n > 1) {
        for (let i = 0; i < n-1; i++) {
            let nextNum = arr[i] + arr[i+1]
            arr.push(nextNum)
        } 
        return arr[n]
    } else if (n === 1) {
        return arr[n]
    } else {
        return "n/a"
    }
}

var climbStairs = function(n) {      
    let arr = [1, 1]
    
    if (n > 1) {
        for (let i = 2; i <= n; i++) {
            arr[i] = arr[i-1] + arr[i-2]
        } 
        return arr[n]
    } else if (n === 1) {
        return arr[n]
    } else {
        return "n/a"
    }
}