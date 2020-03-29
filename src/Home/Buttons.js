import React from 'react';
import { Link } from 'react-router-dom';

import './Home.css';

const Buttons = props => {
    console.log(props)
    return(
        <div>
            <button className="button" onClick={() => props.changeTab('/task')}>Tasks</button>
            <button className="button" onClick={() => props.changeTab('/resources')}>Resources</button>
            <button className="button" onClick={() => props.changeTab('/')}>Fun Stuff</button>
        </div>
    );
};

export default Buttons;