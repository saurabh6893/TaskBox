import React from 'react'

function Stats({ task }) {
  let hpTask = task.filter((task) => task.priority === 5)
  return (
    <div>
      <h4>{task.length} Tasks</h4>
      <h4>{hpTask.length} High priority task</h4>
    </div>
  )
}

export default Stats
