import './App.css';

import TodoList from './components/TodoList';

function App() {
  
    const tasks = [
      { id: 1, text: 'Task 1' },
      { id: 2, text: 'Task 2' },
      { id: 3, text: 'Task 3' },
    ];
  
    const handleDelete = (taskId) => {
    tasks.filter(task => task.id !== taskId);
    };
  
  return (
    
    <div className="App">
      <h1>To-Do List</h1>
      <TodoList tasks={tasks} onDelete={handleDelete} />
    </div>

  );
}

export default App;
