import React, { useState } from 'react';

import NewTask from './NewTask';
import TaskList from './TaskList';
import '../Resources/Resources.css';
import './Task.css';

const Task = () => {
    const [tasks, setTasks] = useState([{
        description: "drink water",
        repeats: true,
        count: 2,
        reminderTime: "7pm"
    }]);

    const addNewTask = (newTask) => {
        setTasks((prevTasks) => {
          return prevTasks.concat(newTask);
        }); // use this when using prev state bc safer
      }

    return(
        <div>
            <div className="intro-bar">
                <h1>🌟 Keep Motivated 🌟</h1>
            </div>
            <div className="intro-desc">
                <h1>Set Daily Tasks</h1>
            </div>
            <div className="task-list">
                <NewTask onAddTask={addNewTask}/>
                <TaskList items={tasks}/>
            </div>
        </div>
    );
};

export default Task;