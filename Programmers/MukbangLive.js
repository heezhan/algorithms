const check = (food_times, i) => {
    if (food_times[i] !== 0) {
        return i
    } else {
        i++
        if (i > food_times.length-1) {
            i = 0
        }
        return check(food_times, i)
    }
}

function solution(food_times, k) {
    let count = 0
    let i = 0
    
    while (count < k+1) {
        
        if (i > food_times.length-1) {
            i = 0
        }
        
        i = check(food_times, i)
        
        food_times[i] -= 1
        
        if (count === k) {
            return i+1
        }
        
        count++
        i++
    }
}