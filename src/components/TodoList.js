import React from 'react'

export default function TodoList({ tasks, onDelete }) {
  return (
    <div>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {task.text}
            <button onClick={() => onDelete(task.id)}>Delete</button>
          </li>
        ))}
      </ul>

    </div>
  )
}
