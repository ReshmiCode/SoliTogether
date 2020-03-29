// reminders
// kind reminders and words of encouragement for recipients
// maybe for sending warnings & important news later? idk man it's late i'll think about that after i sleep for a few hours
// for utilizing the twilio programmable sms messaging service
// for notifications, outbound only
// usable for hundreds of messages, can be changed to utilize twilio notify service for thousands of messages

require('dotenv').config()

const client = require('twilio')(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN);
const numbers = ["+15056158722", "+14693804692"];

let messageArray = 
    ["Make sure you stay hydrated!", 
    "Make sure you're getting some fresh air!", 
    "Stay healthy, wash your hands for at least 20 seconds!", 
    "Stay home to keep yourself and others healthy!", 
    "Stay strong, we will get through this together!", 
    "Times are tough, but you are tougher!", 
    "Eat some fruits and veggies every day!", 
    "Don't forget to exercise every day! Stay active!"];

Promise.all(
    numbers.map(number => {
        return client.messages.create({
            body: messageArray[Math.floor(Math.random() * messageArray.length)],
            from: process.env.MSG_SERVICE_SID,
            to: number,
        });
    })
)
    .then(messages => { console.log("mei i sent the messages it's 4am you're great"); })
    .catch(err => console.error(err));