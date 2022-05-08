import { createContext, useState, useEffect } from 'react'
const TaskContext = createContext()
export const TaskProvider = ({ children }) => {
  const [task, setTask] = useState([])
  const [loadin, setLoadin] = useState(true)

  useEffect(() => {
    fectchTask()
  }, [])

  // fetch task

  const fectchTask = async () => {
    const response = await fetch(`/task?_sort=id&_order=desc`)

    const data = await response.json()
    setTask(data)
    setLoadin(false)
  }

  const addTask = async (newTask) => {
    const response = await fetch('/task', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTask),
    })

    const data = await response.json()
    setTask([data, ...task])
  }

  // const deleteBox = (id) => {
  //   setTask(task.filter((item) => item.id !== id))
  // }

  const deleteBox = async (id) => {
    await fetch(`/task/${id}`, { method: 'DELETE' })

    setTask(task.filter((item) => item.id !== id))
  }

  return (
    <TaskContext.Provider value={{ task, deleteBox, loadin, addTask }}>
      {children}
    </TaskContext.Provider>
  )
}

export default TaskContext
