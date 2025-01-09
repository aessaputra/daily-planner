import React, { createContext } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

// Membuat konteks untuk tugas
export const TaskContext = createContext()

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useLocalStorage('tasks', [])
  const [filter, setFilter] = useLocalStorage('filter', '')

  const addTask = (task) => {
    setTasks([...tasks, task])

    // Meminta izin untuk notifikasi
    if (Notification.permission !== 'granted') {
      Notification.requestPermission()
    }

    // Set reminder notification
    if (task.reminder) {
      const reminderTime = new Date(task.reminder).getTime()
      const currentTime = new Date().getTime()
      const timeUntilReminder = reminderTime - currentTime

      if (timeUntilReminder > 0) {
        setTimeout(() => {
          if (Notification.permission === 'granted') {
            new Notification(`Pengingat: ${task.task}`, {
              body: `Kategori: ${task.category}`,
            })
          } else {
            alert(`Pengingat: ${task.task} - Kategori: ${task.category}`)
          }
        }, timeUntilReminder)
      }
    }
  }

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index)
    setTasks(newTasks)
  }

  // Daftar kategori warna
  const categories = [
    { name: 'Merah', value: 'red', color: 'bg-red-500' },
    { name: 'Hijau', value: 'green', color: 'bg-green-500' },
    { name: 'Biru', value: 'blue', color: 'bg-blue-500' },
    { name: 'Kuning', value: 'yellow', color: 'bg-yellow-500' },
    { name: 'Ungu', value: 'purple', color: 'bg-purple-500' },
  ]

  return (
    <TaskContext.Provider
      value={{
        tasks,
        setTasks,
        addTask,
        deleteTask,
        categories,
        filter,
        setFilter,
      }}
    >
      {children}
    </TaskContext.Provider>
  )
}
