const fetch = require("node-fetch")

//Function to get a dog image from the dog api dog.ceo/dog-api/
// https://dog.ceo/api/breed/Pug/images/random
module.exports.getDogImage = function (){

  return fetch("https://dog.ceo/api/breeds/image/random")
  .then(res => {
    return res.json()
  })
  .then(data => {
    return data["message"]
  })
  
}