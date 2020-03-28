import React from 'react';
import { Link } from 'react-router-dom';

import './Resources.css'

const Resources = () => {
    return(
        <div>
            <div className="intro-bar">
                <h1>🌟 Together Alone 🌟</h1>
            </div>
            <div className="intro-desc">
                <h1>Community Recommendations &amp; Activities</h1>
            </div>
            <div className="links">
                <Link to ='/submit-resource' > <p>Submit A Resource</p></Link>
                <Link to ='/get-support' > <p>💜 To Get Support 💜</p> </Link>
                <Link to ='/hustle' > <p>💻 To Hustle 💻</p> </Link>
                <Link to ='/relax' >  <p>📖 To Relax 📖</p> </Link>
                <Link to ='/attend' > <p>🎟️ To Attend 🎟️</p> </Link>
                <Link to ='/host' > <p>💫 To Host 💫</p> </Link>
            </div>
        </div>
    );
};

export default Resources;