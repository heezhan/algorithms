function rotLeft(a, d) {
    let spliced = a.splice(0, d)
    let x = [...a, ...spliced]
    return x
}

rotLeft([1,2,3,4], 2)