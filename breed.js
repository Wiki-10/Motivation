
const fetch = require("node-fetch")

module.exports.getDogImageByBreed = function (breed){
  
   return fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
  .then(res => {
    return res.json()
  })
  .then(data => {
    return data["message"]
  })
}


