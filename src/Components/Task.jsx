import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { useContext } from 'react'
import TaskContext from './Context/TaskContext'
import Box from './Box'

function Task({ t }) {
  const { deleteBox } = useContext(TaskContext)
  return (
    <Box>
      <div className='task'>
        <div className='hx'>
          <div className='p'>
            <h4>Priority: </h4>
            <h2>{t.range}</h2>
          </div>
          <h2 className='h2nt'>{t.title}</h2>

          <button className='clx' onClick={() => deleteBox(t.id)}>
            <FaTimes />
          </button>
        </div>
        <p id='dxx'>{t.details}</p>
      </div>
    </Box>
  )
}

export default Task
