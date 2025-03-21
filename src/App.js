import React, { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Task 1' },
    { id: 2, text: 'Task 2 do assignment' },
    { id: 3, text: 'Task 3' },
  ]);

  const handleDelete = (taskId) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks); 
  };
  
  return (
    
    <div className="App">
      <h1>To-Do List</h1>
      <TodoList tasks={tasks} onDelete={handleDelete} />
    </div>

  );
}

export default App;
