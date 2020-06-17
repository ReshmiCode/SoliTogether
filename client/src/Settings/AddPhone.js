import React, { useState } from 'react';

import './AddPhone.css';

const axios = require('axios');

const AddPhone = props => {

    const [enteredPhone, setEnteredPhone] = useState('');

    const addPhoneHandler = event => {
        event.preventDefault();

        const phoneNumber = enteredPhone;

        console.log(phoneNumber);

        axios.post('https://hdt-node-servers.herokuapp.com/SoliTogether/api/v1/users/pn/5e802fe14f41e13a0c6c5db4', {
            phoneNo: phoneNumber
        })
        .then(function (response) {
            props.changeNumb(phoneNumber);
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

export default AddPhone;