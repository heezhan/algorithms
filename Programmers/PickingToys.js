function solution(board, moves) {
    let picked = []
    var answer = 0

    for (let i = 0; i < moves.length; i++) {
      let currentY = 0

      while (currentY < board.length) {
        if (board[currentY][moves[i]-1] !== 0) {
          if (board[currentY][moves[i]-1] === picked[picked.length-1]){
            picked.pop()
            answer += 2
          } else {
            picked.push(board[currentY][moves[i]-1])
          }
          board[currentY][moves[i]-1] = 0
          break
        } else {
          currentY ++
        }
      }
    }

    return answer
}