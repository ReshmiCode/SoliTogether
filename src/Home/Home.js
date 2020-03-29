import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Home.css'
import Header from './Header';
import Quote from './Quote';
import Buttons from './Buttons';

const Home = () => {
    const [currTab, setTab] = useState("/fun-stuff");

    const tabChangeHandler = (tab) => { setTab(tab); } 

    return(
        <div>
            <Quote />
            <div class="row">
                <div className="buttons-column">
                    <Buttons changeTab={tabChangeHandler}/>
                </div>
                <div className="content-column">
                    <iframe className="content-box" src={currTab} width="400" height="200"></iframe>
                </div>
            </div>

        </div>
    );
};

export default Home;