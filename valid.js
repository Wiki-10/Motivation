// Set containing all the valid breeds
valid_breeds = new Set(["affenpinscher", "african", "airedale", "pug", "akita", "appenzeller", "basenji", "beagle", "bluetick", "borzoi", "bouvier", "boxer", "brabancon", "briard", "chihuahua", "chow", "clumber", "cockapoo", "coonhound", "cotondetulear", "dachshund", "dalmatian", "dhole", "dingo", "doberman", "eskimo"])

// Function exported to the main (index.js) program; this function is specific to check if the breed asked is a valid breed
module.exports.checkValidMsg = function (msg){

  
  msg = convertMsg(msg)

  if (valid_breeds.has(msg) ){
    return msg
  }
  else{
    return false
  }
  
}


// In this function we convert the message to an accepted string in the list of names.
// Ex: !gOldEn Retriever = !golden_retriever
function convertMsg(msg){
  
  new_msg = msg.slice(1).toLowerCase().split(' ').join('-')
  return new_msg
}

