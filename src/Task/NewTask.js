import React from 'react';

const NewTask = props => {
    const addTaskHandler = event => {
        event.preventDefault();
        const newGoal = {
            description: Math.random().toString(),
        };
        props.onAddTask(newGoal);
    }
    return (
        <div>
            <form onSubmit={addTaskHandler}>
                <input placeholder="enter task">
                </input>
                <button type="submit">add</button>
            </form>
        </div>
    );
};

export default NewTask;