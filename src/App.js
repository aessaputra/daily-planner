import React from 'react'
import { TaskProvider } from './context/TaskContext'
import AddTask from './components/AddTask'
import TaskList from './components/TaskList'
import Calendar from './components/Calendar'
import './styles/tailwind.css'

const App = () => {
  return (
    <TaskProvider>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Daily Planner</h1>
        <Calendar />
        <AddTask />
        <TaskList />
      </div>
    </TaskProvider>
  )
}

export default App
