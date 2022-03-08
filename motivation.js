
const random_dog = require('./randomDog.js')
const quote = require('./quote.js')
let quote_msg = ''
let image = ''
let message = ''


module.exports.motivation = async function(){
  image = await random_dog.getDogImage()
  quote_msg = await quote.quote()

  quote_msg = image + "\n" + quote_msg

  return quote_msg
  
  
}