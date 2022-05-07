import React from 'react'
import { useContext } from 'react'
import Task from './Task'
import TaskContext from '../Components/Context/TaskContext'
function TaskList() {
  const { task } = useContext(TaskContext)

  if (!task || task.length === 0) {
    return <h5 id='Nt'>No Task</h5>
  }
  return (
    <div className='taskList'>
      {task.map((t) => (
        <Task key={t.id} t={t} />
      ))}
    </div>
  )
}

export default TaskList
