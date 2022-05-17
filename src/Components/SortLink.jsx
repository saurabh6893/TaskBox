import React from 'react'
import TaskContext from './Context/TaskContext'
import { FaReceipt } from 'react-icons/fa'
import { createContext } from 'react'

const { sortTask } = createContext(TaskContext)
function SortLink({ children }) {
  return (
    <div className='SortLink'>
      <FaReceipt size={50} onClick={sortTask} />
    </div>
  )
}

export default SortLink
