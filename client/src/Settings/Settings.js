import React, { useState, useEffect } from 'react';

import AddPhone from './AddPhone';
import './Setting.css';
import { render } from '@testing-library/react';

const axios = require('axios');

const Settings = () => {
    const [phone, setPhone] = useState('');

    useEffect(() => {
      const fetchData = async () => {
        const result = await axios(
          'https://hdt-node-servers.herokuapp.com/SoliTogether/api/v1/users/pn/5e802fe14f41e13a0c6c5db4',
        );
        setPhone(result.data.data);
      };
      fetchData();
  }, []);

        return (
            <div>
                <div className="intro-bar">
                    <h1>🌟 Settings 🌟 </h1>
                </div>
                <div className="intro-desc">
                    <h1>Add or Edit your Phone Number</h1>
                </div>
                <p className="current">Your Current Phone Number : {phone}</p>
                <AddPhone changeNumb={setPhone}/>
            </div>
        );
}

export default Settings;