


// Load the discord.js module and all the other related modules
const valid = require('./valid.js')
const motivation = require('./motivation.js')
const random_dog = require('./randomDog.js')
const quote = require('./quote.js')
const search_breed = require('./breed.js')
const Discord = require('discord.js')
const fetch = require("node-fetch")

// Create our discord client
const { Client, Intents } = require('discord.js'); 
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
let breed = ''


    
// When the client is ready we log a message with the user to check if all went succesfully
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

// in this part, the client checks on the messages 
client.on("messageCreate", msg => {

  // Reply with a combined motivation msg including the picture of a dog and a quote
  if(msg.content === "!motivation"){
    motivation.motivation().then(
      (motivation_msg)=>{
        msg.reply(motivation_msg)
      })
  }
  
  // we return a random image from a dog with the getDogImage function
  else if (msg.content === "!dog"){
     random_dog.getDogImage()
    .then(image =>{
      msg.reply(image)
    })
  }

// When the message is diferent to !dog we verify if the user is asking for specific breed
  else if(msg.content === "!quote"){
    quote.quote()
    .then(quote_msg =>{
      msg.reply(quote_msg)
    })
    
  }
  else if (msg.content !== "!dog"){
    if (valid.checkValidMsg(msg.content)){
       
       breed = valid.checkValidMsg(msg.content)
       search_breed.getDogImageByBreed(breed)
      .then(breed_img =>{
        msg.reply(breed_img)
      })
     }
     else if(msg.content.startsWith('!', 0)){
       msg.reply('Command not found')
     }
     
   }
  
})

// We set the token so the bot can login, for security reasons we define this token
// in an environment variable
client.login(process.env.TOKEN)



