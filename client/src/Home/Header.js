import React from 'react';

import './Home.css'

const Header = () => {
    return(
        <div>
            <div className="user-header">
                <h2 className="left">User Login</h2>
                <h2 className="right">Settings</h2>
            </div>
        </div>
    );
};

export default Header;