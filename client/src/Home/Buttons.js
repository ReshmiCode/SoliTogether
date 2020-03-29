import React from 'react';

import './Home.css';

const Buttons = props => {
    return(
        <div>
            <button className="button" onClick={() => props.changeTab('/task')}>Tasks</button>
            <button className="button" onClick={() => props.changeTab('/resources')}>Resources</button>
            <button className="button" onClick={() => props.changeTab('/fun-stuff')}>Fun Stuff</button>
            <button className="button" onClick={() => props.changeTab('/settings')}>Settings</button>
        </div>
    );
};

export default Buttons;