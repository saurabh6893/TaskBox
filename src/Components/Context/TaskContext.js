import { createContext, useState } from ' react'

// function TaskContext() {
//   return <div>TaskContext</div>
// }

// export default TaskContext

const TaskContext = createContext()

export const TaskProvider = ({ children }) => {
  const [task, setTask] = useState([
    {
      id: 1,
      text: `this is from context`,
      priority: 4,
    },
  ])
  return (
    <TaskContext.Provider value={{ task }}>{children}</TaskContext.Provider>
  )
}

export default TaskContext
