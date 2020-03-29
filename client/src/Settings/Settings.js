import React, { useState } from 'react';

import './Setting.css';

const axios = require('axios');

const Settings = () => {

    const [enteredPhone, setEnteredPhone] = useState('');

    const addPhoneHandler = event => {
        event.preventDefault();

        const phoneNumber = enteredPhone;

        console.log(phoneNumber);

        axios.post('https://rowdyhacks-2020.appspot.com/api/v1/users/pn/5e802fe14f41e13a0c6c5db4', {
            data: phoneNumber
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });

        setEnteredPhone('');
    }

    const phoneChangeHandler = event => {
        setEnteredPhone(event.target.value);
    };

    return (
        <div>
            <div className="intro-bar">
                    <h1>🌟 Settings 🌟 </h1>
                </div>
                <div className="intro-desc">
                    <h1>Add or Edit your Phone Number</h1>
                </div>
                <div className="form">
                <form className="new-task" onSubmit={addPhoneHandler} >
                    <label> Add/Edit Phone Number: 
                        <input type="text" value={enteredPhone} onChange={phoneChangeHandler} placeholder="Add/Edit Phone Number" required />
                    </label>
                    <br />
                    <button className="task-button" type="submit">Add/Edit Phone</button>
                </form>
            </div>
        </div>
    );
}

export default Settings;