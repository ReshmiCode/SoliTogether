import React, { useState } from 'react';
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
        
    //     axios.post('/user', {
    //         newGoal
    //       })
    //       .then(function (response) {
    //         console.log(response);
    //       })
    //       .catch(function (error) {
    //         console.log(error);
    //     });

        setEnteredTask('');
    };

    const taskChangeHandler = event => {
        setEnteredTask(event.target.value);
    };


    return (
        <div>
            <form onSubmit={addTaskHandler}>
                <input type="text" value={enteredTask} onChange={taskChangeHandler} placeholder="Enter Task" required />
                <button type="submit">add</button>
            </form>
        </div>
    );
};

export default NewTask;