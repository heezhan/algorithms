function solution(answers) {
    let answer = []
    let scores = [0,0,0]

    let first = [1,2,3,4,5]
    let second = [2,1,2,3,2,4,2,5]
    let third = [3,3,1,1,2,2,4,4,5,5]

    let i = 0
    while (i < answers.length) {
        first[i % 5] === answers[i] ? scores[0] += 1 : scores[0]
        second[i % 8] === answers[i] ? scores[1] += 1 : scores[1]
        third[i % 10] === answers[i] ? scores[2] += 1 : scores[2]

        i++
    }

    let max = Math.max(...scores)

    for (let i = 0; i < scores.length; i++) {
        if (scores[i] === max) {answer.push(i+1)}
    }

    return answer
}