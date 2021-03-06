var artisanMartians = function(target) {
    let insta = {i: 1, n: 1, s: 1, t: 1, a: 2, g: 1, r: 1, m: 1}
    let hash = {}

    let arr = target.split(" ")

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
        if (hash[arr[i][j]]) {
            hash[arr[i][j]] += 1
        } else {
            hash[arr[i][j]] = 1
        }
        }
    }

    let hashKeysArr = Object.keys(hash)

    let count = []

    for (let k = 0; k < hashKeysArr.length; k++) {
        count.push(Math.ceil(hash[hashKeysArr[k]] / insta[hashKeysArr[k]]))
    }

    return Math.max(...count) 
};
  
artisanMartians("tiara")

//cleaner code 
var artisanMartians = function(target) {
    let insta = {i: 1, n: 1, s: 1, t: 1, a: 2, g: 1, r: 1, m: 1}
    let hash = {}
  
    let str = target.split(" ").join("")
  
    for (let i = 0; i < str.length; i++) {
      if (hash[str[i]]) {
        hash[str[i]] += 1
      } else {
        hash[str[i]] = 1
      }
    }
  
    let hashKeysArr = Object.keys(hash)
  
    let count = []
  
    for (let j = 0; j < hashKeysArr.length; j++) {
      count.push(Math.ceil(hash[hashKeysArr[j]] / insta[hashKeysArr[j]]))
    }
  
    return Math.max(...count) 
};
  
artisanMartians("artisan martians")