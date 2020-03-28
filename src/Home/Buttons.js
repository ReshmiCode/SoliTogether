import React from 'react';
import { Link } from 'react-router-dom';

import './Home.css'

const Buttons = () => {
    return(
        <div>
            <Link to="/home-tasks">
                <button className="button">Tasks</button>
            </Link>
            <Link to="/home-resources">
                <button className="button">Resources</button>
            </Link>
            <Link to="/">
                <button className="button">Fun Stuff</button>
            </Link>
        </div>
    );
};

export default Buttons;