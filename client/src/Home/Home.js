import React from 'react';
import { Link } from 'react-router-dom';

import './Home.css'
import Header from './Header';
import Quote from './Quote';
import Buttons from './Buttons';

const Home = () => {
    return(
        <div>
            <Header />
            <Quote />
            <div class="row">
                <div className="column">
                    <Buttons />
                </div>
                <div className="column">
                    <iframe className="content-box" src="/fun-stuff" width="400" height="200"></iframe>
                </div>
            </div>

        </div>
    );
};

export default Home;