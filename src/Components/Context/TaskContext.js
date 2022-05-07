import { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
const TaskContext = createContext()

export const TaskProvider = ({ children }) => {
  const [task, setTask] = useState([
    {
      id: 6,
      title: 'hello',
      details: `this is from context`,
      range: 4,
    },
  ])

  const deleteBox = (id) => {
    setTask(task.filter((item) => item.id !== id))
  }

  const addTask = (newTask) => {
    newTask.id = uuidv4()
    setTask([newTask, ...task])
  }

  const [TaskEdit, setTaskEdit] = useState({
    item: {},
    edit: false,
  })

  const editTask = (item) => {
    setTaskEdit({
      item,
      edit: true,
    })
  }
  return (
    <TaskContext.Provider value={{ task, deleteBox, addTask, editTask }}>
      {children}
    </TaskContext.Provider>
  )
}

export default TaskContext
