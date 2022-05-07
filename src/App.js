import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Head from './Components/Head'
import TaskList from './Components/TaskList'
import Data from './DataBase/Data'
import Stats from './Components/Stats'
import TaskForm from './Components/Pages/TaskForm'
import { TaskProvider } from './Components/Context/TaskContext'
import About from './Components/Pages/About'
import AboutLink from './Components/AboutLink'
import TaskFormLink from './Components/TaskFormLink'

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
    <TaskProvider>
      <Router>
        <div className='app'>
          <Routes>
            <Route
              exact
              path='/'
              element={
                <>
                  <Head />
                  <Stats task={task} />
                  <TaskList task={task} deleteBox={deleteBox} />
                </>
              }
            ></Route>
            <Route path='/about' element={<About />} />
            <Route path='/add' element={<TaskForm handleAdd={addTask} />} />
          </Routes>
          <TaskFormLink />
          <AboutLink />
        </div>
      </Router>
    </TaskProvider>
  )
}

export default App
