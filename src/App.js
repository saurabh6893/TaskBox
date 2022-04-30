import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Head from './Components/Head'
import TaskList from './Components/TaskList'
import Data from './DataBase/Data'
import Stats from './Components/Stats'
import TaskForm from './Components/TaskForm'
function App() {
  const [task, setTask] = useState(Data)

  const deleteBox = (id) => {
    setTask(task.filter((item) => item.id !== id))
  }

  const addTask = (newTask) => {
    newTask.id = uuidv4()
    setTask([newTask, ...task])
  }

  return (
    <div className='app'>
      <Head />
      <TaskForm handleAdd={addTask} />
      <Stats task={task} />
      <TaskList task={task} deleteBox={deleteBox} />
    </div>
  )
}

export default App
