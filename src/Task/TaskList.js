import React from 'react';

import TaskCard from './TaskCard';

const Task = props => {
    if (props.items.length === 0) {
        return (
          <h2>No tasks. Add one!</h2>
        );
      }
    
      return (
        <div>
            <ul className="users-list">
              {props.items.map(task => {
                return (
                  <TaskCard task={task} />
                );
              })}
            </ul>
        </div>
      );
    };

export default Task;