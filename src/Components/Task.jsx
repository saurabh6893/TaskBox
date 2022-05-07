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
          <h3>Priority {t.range}</h3>
          <h2>{t.title}</h2>

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
