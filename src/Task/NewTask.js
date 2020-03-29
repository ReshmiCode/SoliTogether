import React, { useState } from 'react';

import './NewTask.css';

const axios = require('axios').default;

const NewTask = props => {

    const [enteredTask, setEnteredTask] = useState('');

    const addTaskHandler = event => {
        event.preventDefault();
        const newGoal = {
            id: Math.random().toString(),
            description: enteredTask,
            count: 0
        };
        props.onAddTask(newGoal);
        
        axios.post('https://rowdyhacks-2020.appspot.com/api/v1/users/tasks/5e802fe14f41e13a0c6c5db4', {
            id: newGoal.id,
            name: newGoal.description
        })
        .then(function (response) {
        console.log(response);
        })
        .catch(function (error) {
        console.log(error);
        });

        setEnteredTask('');
    };

    const taskChangeHandler = event => {
        setEnteredTask(event.target.value);
    };


    return (
        <div className="form">
            <form className="new-task" onSubmit={addTaskHandler} >
                <label> Add New Task: 
                    <input type="text" value={enteredTask} onChange={taskChangeHandler} placeholder="Enter Task" required />
                </label>
                <br />
                <button className="task-button" type="submit">Add Task</button>
            </form>
        </div>
    );
};

export default NewTask;