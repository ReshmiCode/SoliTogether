import React from 'react';
import { Link } from 'react-router-dom';

import './Home.css'

const Buttons = props => {
    return(
        <div>
            <button className="button" onClick={() => props.changeTab('home-tasks')}>Tasks</button>
            <button className="button" onClick={() => props.changeTab('home-resources')}>Resources</button>
            <button className="button" onClick={() => props.changeTab('/')}>Fun Stuff</button>
        </div>
    );
};

export default Buttons;