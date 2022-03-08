const fetch = require("node-fetch")


module.exports.quote = function (){

  return fetch("https://zenquotes.io/api/random")
  .then(res => {
    return res.json()
  })
  .then(msg =>{
    
    return "`" + msg[0]["q"] + "\n" +  msg[0]["a"] + "`"
  })
  
}