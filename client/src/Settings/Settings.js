import React, { useState } from 'react';

import AddPhone from './AddPhone';
import './Setting.css';
import { render } from '@testing-library/react';

const axios = require('axios');

class Settings extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          phone: ""
        };
      }
    
    componentDidMount() {
        axios.get('https://rowdyhacks-2020.appspot.com/api/v1/users/pn/5e802fe14f41e13a0c6c5db4')
        .then(function (response) {
          console.log(response.data)
          this.setState({ phone :  response.data});
          console.log(this.state)
          console.log(this.state.phone.data)
        }.bind(this))
        .catch(function (error) {
          console.log(error);
        })
        .then(function () {            
        }
      );
    }

    render(){
        const { phoneNumber } = this.state;
        return (
            <div>
                <div className="intro-bar">
                    <h1>🌟 Settings 🌟 </h1>
                </div>
                <div className="intro-desc">
                    <h1>Add or Edit your Phone Number</h1>
                </div>
                <p className="current">Your Current Phone Number : {phoneNumber}</p>
                <AddPhone />
            </div>
        );
    }
}

export default Settings;