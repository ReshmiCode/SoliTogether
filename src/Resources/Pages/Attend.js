import React from 'react';
import { Link } from 'react-router-dom';

import './ResourcePages.css'

const Attend = () => {
    return(
        <div>
            <div  className="links">
                <Link to ='/resources'> <p>🌟 Together Alone : Home Page🌟</p> </Link>
            </div>
            <div>
                <h1>🎟️ To Attend 🎟️</h1>
            </div>
            <div  className="links">
                <Link to ='/submit-resource' > <p>Submit A Resource</p> </Link>
                <Link to ='/get-support' > <p>💜 To Get Support 💜</p> </Link>
                <Link to ='/hustle' > <p>💻 To Hustle 💻</p> </Link>
                <Link to ='/relax' >  <p>📖 To Relax 📖</p>  </Link>
                <Link to ='/attend' > <p>🎟️ To Attend 🎟️</p> </Link>
                <Link to ='/host' > <p>💫 To Host 💫</p> </Link>
            </div>
        </div>
    );
};

export default Attend;