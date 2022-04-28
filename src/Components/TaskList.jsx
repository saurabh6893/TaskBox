import React from 'react'
import Task from './Task'
function TaskList({ task, deleteBox }) {
  if (!task || task.length === 0) {
    return <h5 id='Nt'>No Task</h5>
  }
  return (
    <div className='taskList'>
      {task.map((t) => (
        <Task key={t.id} t={t} deleteBox={deleteBox} />
      ))}
    </div>
  )
}

export default TaskList
