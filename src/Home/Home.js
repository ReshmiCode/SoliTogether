import React from 'react';

import './Home.css'

const Home = () => {

    let frame = "/fun-stuff";

    const setFrameTask = ()  => {
        frame = '/task'
    }

    const setFrameResources =()  => {
        frame = '/resources'
    }

    const setFrameFunStuff =()  => {
        frame = '/fun-stuff'
    }

    return(
        <div>
            <div className="user-header">
                <h2 className="left">User Login</h2>
                <h2 className="right">Settings</h2>
            </div>
            <div className="home-header">
                <h1>Motivational Quote</h1>
            </div>
            <div class="row">
                <div className="column">
                    <div>
                        <button className="button" onClick="setFrameTask">Tasks</button>
                        <button className="button" onClick="setFrameResources">Resources</button>
                        <button className="button" onClick="setFrameFunStuff">Fun Stuff</button>
                    </div>
                </div>
                <div className="column">
                    <iframe className="content-box" src={frame} width="400" height="200"></iframe>
                </div>
            </div>

        </div>
    );
};

export default Home;