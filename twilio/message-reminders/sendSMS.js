//test for single message

require('dotenv').config()

const client = require('twilio')(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN);

let messageArray = ["mei", "saloni", "reshmi", "vincent", "pinguino"];


client.messages
  .create({
     body: messageArray[Math.floor(Math.random() * messageArray.length)],
     from: process.env.MY_NUMBER,
     to: "+15056158722"
   })
  .then(message => { console.log(message.sid); })
  .catch(err => console.error(err));