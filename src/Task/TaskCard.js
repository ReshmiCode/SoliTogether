import React from 'react';

const TaskCard = props => {
    console.log(props)
    return <h2>{props.task.description}</h2>;
}

export default TaskCard;