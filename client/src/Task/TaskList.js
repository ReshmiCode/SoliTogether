import React from 'react';

import TaskCard from './TaskCard';

import './Task.css';

const Task = props => {
    if (props.items.length === 0) {
        return (
          <h2>No tasks. Add one!</h2>
        );
      }
    
      return (
        <div>
            <ul className="tasks-list">
              {props.items.map(task => {
                return (
                  <TaskCard task={task} increaseCount={props.increaseCount} removeTask={props.removeTask}/>
                );
              })}
            </ul>
        </div>
      );
    };

export default Task;