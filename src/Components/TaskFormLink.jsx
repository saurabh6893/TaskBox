import React from 'react'
import { Link } from 'react-router-dom'
import { FaPlus } from 'react-icons/fa'

function TaskFormLink() {
  return (
    <div className='TaskFormLink'>
      <Link to='./add'>
        <FaPlus size={40} />
      </Link>
    </div>
  )
}

export default TaskFormLink

/* <Link to={{ pathname: './about', search: '?sort=name', hash: 'hello' }}> */
