import React from 'react';
import { Link } from 'react-router-dom';

import './Home.css';

const Buttons = props => {
    console.log(props)
    return(
        <div>
            <button className="button" onClick={() => props.changeTab('home-tasks')}>Tasks</button>
            <button className="button">Resources</button>
            <button className="button">Fun Stuff</button>
        </div>
    );
};

export default Buttons;