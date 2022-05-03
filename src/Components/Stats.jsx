import React from 'react'

function Stats({ task }) {
  return (
    <div className='sts'>
      <h4>{task.length} Tasks</h4>
    </div>
  )
}

export default Stats
