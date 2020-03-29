import React from 'react';

import './FunStuff.css'

const funStuff = [
    "https://media.giphy.com/media/Z5SMZDDtlPgL6/giphy.gif",
    "https://media.giphy.com/media/lqVQEskOmoopO/giphy.gif",
    "https://media.giphy.com/media/10xUg8DdgQSs9i/giphy.gif",
    "https://media.giphy.com/media/VkMV9TldsPd28/giphy.gif",
     "https://media.giphy.com/media/7beSjLq7J6qfS/giphy.gif",
     "https://media.giphy.com/media/ZBoHqyxmhv85ff3qOI/giphy.gif",
     "https://media.giphy.com/media/ZBoHqyxmhv85ff3qOI/giphy.gif",
     "https://media.giphy.com/media/PnvOB6zsNb04g/giphy.gif",
     "https://media.giphy.com/media/PnvOB6zsNb04g/giphy.gif",
     "https://media.giphy.com/media/gxxlowyvtfS0M/giphy.gif"
];

const FunStuff = () => {
    const randomIndex = Math.floor(Math.random() * funStuff.length); 
    return(
        <div>
            <div className="intro-bar">
                <h1>🌟 Fun Stuff 🌟 </h1>
            </div>
            <div className="intro-desc">
                <h1>The Cutest Collection</h1>
            </div>
            <div className="fun">
                <img  className="fun" src={funStuff[randomIndex]} />
            </div>
        </div>
    );
};

export default FunStuff;