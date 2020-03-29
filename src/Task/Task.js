import React from 'react';

import TaskList from './TaskList';
import '../Resources/Resources.css'

const Task = () => {
    const tasks = [{
        description: "drink water",
        repeats: true,
        count: 2,
        reminderTime: "7pm"
    }];

    return(
        <div>
            <div className="intro-bar">
                <h1>🌟 Keep Motivated 🌟</h1>
            </div>
            <div className="intro-desc">
                <h1>Set Daily Tasks</h1>
            </div>
            <h1>Tasks</h1>
            <TaskList items={tasks}/>
        </div>
    );
};

export default Task;