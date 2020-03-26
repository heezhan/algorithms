var minStickers = function(stickers, target) {
    let tar = []
    let arr = []
    
    for (let k = 0; k < target.length; k++) {
      tar.push(target[k])
    }
  
    for (let i = 0; i < stickers.length; i++) {
      let hash = {}
  
      for (let j = 0; j < stickers[i].length; j++) {
        if (hash[stickers[i][j]]) {
          hash[stickers[i][j]] += 1
        } else {
          hash[stickers[i][j]] = 1
        }
      }
  
      arr.push(hash)
  
      for (let t = 0; t < tar.length; t++) {
        if (hash.hasOwnProperty(tar[t]) && tar[t] > 0) {
          hash[tar[t]] -= 1
  
          tar.shift()
  
        } 
      }
  
    }
  };
  
  minStickers(["with", "example", "science"], "thehat")
  
  // my first instinct would be to create a hash table with the letters as keys and the number of times the letter occurs as the values.
  // when I iterate over the letters of the target word, if the letter exists in the first word of the hash table, I would subtract one. If the letter does not exist, in the first word, move on to the next word.
  