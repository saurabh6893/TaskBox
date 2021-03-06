import React from 'react'
import { Link } from 'react-router-dom'
import TheButton from '../TheButton'
import TaskContext from '../Context/TaskContext'
import { useState, useContext } from 'react'

const TaskForm = () => {
  // useState Hooks
  const [title, setTitle] = useState('')
  const [range, setRange] = useState('')
  const [details, setDetails] = useState('')
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [msg, setMsg] = useState('')
  const { addTask } = useContext(TaskContext)
  const [version, setVersion] = useState('incomplete')

  function verifier() {
    if (title === '') {
      setBtnDisabled(true)
      setMsg(null)
    } else if (title !== '' && title.trim().length < 4) {
      setBtnDisabled(true)
      setMsg('Please enter atleast 4 characters for Title')
    } else {
      setBtnDisabled(false)
      setMsg(null)
      setVersion('complete')
    }
  }
  // Events
  const handleTitle = (e) => {
    setTitle(e.target.value)
    verifier()
  }
  //

  //
  const handleSubmit = (e) => {
    e.preventDefault()

    if (title.trim().length > 4 && details.trim().length > 10) {
      const newTask = {
        title,
        range,
        details,
      }
      addTask(newTask)
      setTitle('')
      setRange(1)
      setDetails('')
    }
  }

  const handleRange = (e) => {
    setRange(+e.target.value)
  }

  const handleDetails = (e) => {
    setDetails(e.target.value)
    verifier()
  }

  return (
    <form className='tf' onSubmit={handleSubmit}>
      <h2 className='h2nt'>New Task</h2>

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
        <TheButton
          type='submit'
          className='btxx'
          isDisabled={btnDisabled}
          version={version}
        >
          <span>Add</span>
          <i></i>
        </TheButton>
      </div>
      {msg && <div className='msg'>{msg}</div>}
      <Link className='theLink' to='/'>
        Back
      </Link>
    </form>
  )
}

export default TaskForm
