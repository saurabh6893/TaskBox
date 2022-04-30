import React from 'react'
import { FaTimes } from 'react-icons/fa'
import Box from './Box'
function Task({ t, deleteBox }) {
  return (
    <Box>
      <div className='task'>
        <div className='hx'>
          <h3>{t.title}</h3>
          <h3>Priority {t.range}</h3>
          <button className='clx' onClick={() => deleteBox(t.id)}>
            <FaTimes />
          </button>
        </div>
        <p>{t.details}</p>
      </div>
    </Box>
  )
}

export default Task
