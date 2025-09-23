import React, { useState } from 'react';
import TaskList from './TaskList';

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");

  const addTask = () => {
    if (taskInput.trim() === "") return;

    const task = {
      id: Date.now(),
      text: taskInput,
      status: false,
    };

    setTasks([...tasks, task]);
    setTaskInput("");
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const changeStatus = (id) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, status: !task.status };
        }
        return task;
      })
    );
  };

  const updateTask = (id, newText) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, text: newText };
        }
        return task;
      })
    );
  };

  const uncompletedTasks = tasks.filter((task) => !task.status);
  const completedTasks = tasks.filter((task) => task.status);

  return (
    <div className="min-h-screen bg-[url('/public/background.jpg')] bg-cover text-white flex justify-center pt-16 px-4">
      <div className="w-full h-auto bg-white max-w-xl mb-8 p-6 rounded-lg shadow-lg text-black">
        <h1 className="text-4xl font-bold mb-4 text-center">Task Manager</h1>

        <div className="flex mb-4">
          <input type="text" value={taskInput} placeholder="Add new task..." onChange={(e) => setTaskInput(e.target.value)} className="flex-grow p-2 rounded-l-lg border border-gray-300"
          />
          <button onClick={addTask} className="p-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-700 transition">Add</button>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Uncompleted Tasks</h2>
          <TaskList
            tasks={uncompletedTasks}
            onDelete={deleteTask}
            onCheck={changeStatus}
            onUpdate={updateTask}
          />
        </div>

        <div className="mt-6">
          <h2 className="text-2xl font-semibold mb-2">Completed Tasks</h2>
          <TaskList
            tasks={completedTasks}
            onDelete={deleteTask}
            onCheck={changeStatus}
            onUpdate={updateTask}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
