import React from 'react';

import './Home.css';

const quotes = [
    {  
        "text":"The only people who never fail are those who never try.",
        "from":"Ilka Chase"
     },
     {  
        "text":"The only thing we have to fear is fear itself.",
        "from":"President Franklin Roosevelt"
     },
     {  
        "text":"Worry is like a rocking chair: It gives you something to do but never gets you anywhere.",
        "from":"Erma Bombeck"
     },
     {  
        "text":"Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less.",
        "from":"Marie Curie"
     },
     {  
        "text":"Things could always be better, but things could always be worse.",
        "from":"Marla Gibbs"
     },
     {  
        "text":"Nothing's okay. So it's okay.",
        "from":"David O. Russell"
     },
     {  
        "text":"I like to think of life as an adventure, like a roller coaster. It helps with the ups and downs.",
        "from":"Eddie Izzard"
     },
     {  
        "text":"Life isn't about waiting for the storm to pass. It's about learning how to dance in the rain.",
        "from":"Vivian Greene"
     },
     {  
        "text":"Everything will be okay in the end. If it's not okay, it's not the end.",
        "from":"John Lennon"
     },
     {  
        "text":"Start today, not tomorrow. If anything, you should have started yesterday.",
        "from":"Emil Motycka"
     }
];

const Quote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length); 
    return(
        <div>
            <div className="home-header">
                <h1>"{quotes[randomIndex].text}" -{quotes[randomIndex].from}</h1>
            </div>
        </div>
    );
};

export default Quote;