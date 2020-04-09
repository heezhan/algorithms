function hourglassSum(arr) {
    let maxSum = -Infinity

    for (let y = 0; y <= 3; y++) {
        for (let x = 0; x <= 3; x++) {
            let sum = arr[y][x] + arr[y][x+1] + arr[y][x+2]
            sum += arr[y+1][x+1]
            sum += arr[y+2][x] + arr[y+2][x+1] + arr[y+2][x+2]

            if (maxSum < sum) {
                maxSum = sum
            }
        }
    }
    
    return maxSum
}
