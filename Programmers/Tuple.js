function solution(s) {
    let array = []
    let arrayStr = s.substring(2, s.length-2).split("},{")
    let answer = []
    
    for (let i = 0; i < arrayStr.length; i++) {
      array.push(arrayStr[i].split(","))
    }
  
    array.sort((a,b) => a.length-b.length)
  
    for (let i = 0; i < array.length; i++) {
      array[i].map(num => answer.includes(parseInt(num)) === false ? answer.push(parseInt(num)) : null)
    } 
  
    return answer
}