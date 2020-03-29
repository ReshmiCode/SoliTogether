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

    return (
        <div className="card-main" onClick={() => props.increaseCount(props.task.name)}>
            <h2>{props.task.name}{checks}</h2>
        </div>
    );
}

export default TaskCard;