import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Head from './Components/Head'
import TaskList from './Components/TaskList'
import Stats from './Components/Stats'
import TaskForm from './Components/Pages/TaskForm'
import { TaskProvider } from './Components/Context/TaskContext'
import About from './Components/Pages/About'
import AboutLink from './Components/AboutLink'
import TaskFormLink from './Components/TaskFormLink'

function App() {
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
                  <Stats />
                  <TaskList />
                </>
              }
            ></Route>
            <Route path='/about' element={<About />} />
            <Route path='/add' element={<TaskForm />} />
          </Routes>
          <TaskFormLink />
          <AboutLink />
        </div>
      </Router>
    </TaskProvider>
  )
}

export default App

// move to line 40 if fail
//  handleAdd={addTask}
