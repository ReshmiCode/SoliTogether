import React from 'react';

import './TaskCard.css';

const TaskCard = props => {
    var checks = ' ';

    //THIS WEIRD
    //i++ will give 2 checks
    //i+=2 will give 1 check
    for (var i = 0; i < props.task.count; i+=2) {
        checks += '✅';
    }

    const deleteTask = event => {
        event.stopPropagation();
        props.removeTask(props.task._id);
    }

    return (
        <div className="card-main">
            <h2 onClick={() => props.increaseCount(props.task.name)}>{props.task.name}{checks}
                <button type='button' onClick={deleteTask}>
                    <img className="icon" src="../../trashIcon.png" alt="delete" />
                </button>
            </h2>
        </div>
    );
}

export default TaskCard;