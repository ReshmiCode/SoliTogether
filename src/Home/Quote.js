import React from 'react';

import './Home.css'
const RandQuote = require('inspirational-quotes');

const Quote = () => {
    return(
        <div>
            <div className="home-header">
                <h1>{RandQuote.getRandomQuote()}</h1>
            </div>
        </div>
    );
};

export default Quote;