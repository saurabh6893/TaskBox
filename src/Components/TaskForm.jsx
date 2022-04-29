import React from 'react'
import { useState } from 'react'
function TaskForm() {
  const [title, setTitle] = useState('')
  const [range, setRange] = useState('')
  const [details, setDetails] = useState('')
  const handleTitle = (e) => {
    setTitle(e.target.value)
    console.log(e.target.value)
  }
  const handleRange = (e) => {
    setRange(e.target.value)
    console.log(e.target.value)
  }
  const handleDetails = (e) => {
    setDetails(e.target.value)
    console.log(e.target.value)
  }

  return (
    <form className='tf'>
      <h2>Set a new task</h2>
      <div className='inputBox'>
        <div className='up'>
          <input
            onChange={handleTitle}
            className='tt'
            type='text'
            placeholder='Enter task Title'
            value={title}
          />
          <input
            onChange={handleRange}
            className='range'
            type='range'
            min='1'
            max='5'
            value={range}
          />
        </div>
        <input
          onChange={handleDetails}
          type='text'
          placeholder='Enter task details'
          className='down'
          value={details}
        />
        <button type='submit' className='btx'>
          Add
        </button>
      </div>
    </form>
  )
}

export default TaskForm
