//test for single message

require('dotenv').config()

const client = require('twilio')(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN);

let messageArray = 
    ["Make sure you stay hydrated!", 
    "Make sure you're getting some fresh air!", 
    "Stay healthy, wash your hands for at least 20 seconds!", 
    "Stay home to keep yourself and others healthy!", 
    "Stay strong, we will get through this together!", 
    "Times are tough, but you are tougher!", 
    "Eat some fruits and veggies every day!", 
    "Don't forget to exercise every day! Stay active!"];

client.messages
  .create({
     body: messageArray[Math.floor(Math.random() * messageArray.length)],
     from: process.env.MY_NUMBER,
     to: "+14693804692"
   })
  .then(message => { console.log(message.sid); })
  .catch(err => console.error(err));