import React from 'react';
import Task from './Task';

function TaskList({ tasks, onDelete, onCheck, onUpdate }) {
  if (tasks.length === 0) {
    return <p>No tasks here!!</p>;
  }

  return (
    <div>
      {tasks.map(task => (
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          onCheck={onCheck}
          onUpdate={onUpdate}
        />
      ))}
    </div>
  );
}

export default TaskList;
