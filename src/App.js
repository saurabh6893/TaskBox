import React, { useState } from 'react'
import Head from './Components/Head'
import TaskList from './Components/TaskList'
import Data from './DataBase/Data'
function App() {
  const [task, setTask] = useState(Data)
  const deleteBox = (id) => {
    setTask(task.filter((item) => item.id !== id))
  }
  return (
    <div className='app'>
      <Head />
      <TaskList task={task} deleteBox={deleteBox} />
    </div>
  )
}

export default App
