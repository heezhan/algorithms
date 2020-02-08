myList = ["flour", "egg", "egg", "vanilla"]
inventory = ["flour", "egg", "egg", "vanilla"]

var supermarket = function(myList, inventory) {
    let object = {}

    for ( let i = 0; i < inventory.length; i++ ) {
      if ( object.hasOwnProperty(inventory[i]) ) {
        object[inventory[i]] += 1
      } else {
        object[inventory[i]] = 1
      }
    }

    for ( let i = 0; i < myList.length; i++ ) {
      if ( object.hasOwnProperty([myList[i]]) && object[[myList[i]]] > 0 ) {
        object[myList[i]] -= 1
      } else {
        return false
      }
    }
    
    return true 
};  

supermarket(myList, inventory)