import React, { useState } from 'react';

function Task({ task, onDelete, onCheck, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.text);

  const Save = () => {
    onUpdate(task.id, editedText);
    setIsEditing(false);
  };

  const Cancel = () => {
    setEditedText(task.text);
    setIsEditing(false);
  };

  let taskContent;
  if (isEditing) {
    taskContent = (
      <input value={editedText} onChange={(e) => setEditedText(e.target.value)} className="border border-gray-300 rounded px-2 py-1"/>
    );
  } 
  else {
    taskContent = (
      <span className={task.status ? 'line-through text-gray-500' : ''}>{task.text}</span>
    );
  }

  let Buttons;
  if (isEditing) {
    Buttons = (
      <>
        <button onClick={Save} className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded">Save</button>
        <button onClick={Cancel} className="bg-gray-400 hover:bg-gray-500 text-white px-3 py-1 rounded">Cancel</button>
      </>
    );
  } 
  else {
    if (!task.status) {
      Buttons = (
        <>
          <button onClick={() => setIsEditing(true)} className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded">Edit</button>
          <button onClick={() => onDelete(task.id)} className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded">Delete</button>
        </>
      );
    }
     else {
      Buttons = (
        <>
          <button onClick={() => onDelete(task.id)} className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded">Delete</button>
        </>
      );
    }
  }

  return (
    <div className="flex justify-between items-center bg-white bg-opacity-80 text-black rounded-md p-3 mb-2 shadow-md">
      <div className="flex items-center space-x-2">
        <input type="checkbox" checked={task.status} onChange={() => onCheck(task.id)} className="w-5 h-5"/>
        {taskContent}
      </div>
      <div className="flex space-x-2">
        {Buttons}
      </div>
    </div>
  );
}

export default Task;
