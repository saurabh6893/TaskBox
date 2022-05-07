import React from 'react'
import { useContext } from 'react'
import TaskContext from './Context/TaskContext'

function Stats() {
  const task = useContext(TaskContext)
  return (
    <div className='sts'>
      <h4>{task.length} tasks</h4>
    </div>
  )
}

export default Stats
