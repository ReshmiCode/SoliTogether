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
                <Link to ='/get-support' className='link'> <p>💜 To Get Support 💜</p> </Link>
                <Link to ='/hustle' className='link'> <p>💻 To Hustle 💻</p> </Link>
                <Link to ='/relax' className='link'>  <p>📖 To Relax 📖</p> </Link>
                <Link to ='/attend' className='link'> <p>🎟️ To Attend 🎟️</p> </Link>
                <Link to ='/host' className='link'> <p>💫 To Host 💫</p> </Link>
                <Link to ='/submit-resource' className='link'> <p>Submit A Resource</p></Link>
            </div>
        </div>
    );
};

export default Resources;