import React from 'react';

import './TaskCard.css';

const TaskCard = props => {
    var checks = ' ';

    for (var i = 0; i < props.task.count; i+=2) {
        checks += '✅';
    }

    return (
        <div className="card-main" onClick={() => props.increaseCount(props.task.description)}>
            <h2>{props.task.description}{checks}</h2>
        </div>
    );
}

export default TaskCard;