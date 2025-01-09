import React, { useState, useContext } from 'react'
import { TaskContext } from '../context/TaskContext'

const AddTask = () => {
  const { addTask, categories } = useContext(TaskContext)
  const [task, setTask] = useState('')
  const [category, setCategory] = useState('')
  const [reminder, setReminder] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (task && category) {
      addTask({ task, category, reminder })
      setTask('')
      setCategory('')
      setReminder('')
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col mb-4 p-4 bg-white shadow-md rounded-lg"
    >
      <input
        type="text"
        placeholder="Tugas..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="p-3 border border-gray-300 rounded mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="p-3 border border-gray-300 rounded mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      >
        <option value="">Pilih Kategori Warna</option>
        {categories.map((cat) => (
          <option key={cat.value} value={cat.value}>
            {cat.name}
          </option>
        ))}
      </select>
      <input
        type="datetime-local"
        value={reminder}
        onChange={(e) => setReminder(e.target.value)}
        className="p-3 border border-gray-300 rounded mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="bg-green-500 text-white p-3 rounded hover:bg-green-600 transition duration-200"
      >
        Tambah Tugas
      </button>
    </form>
  )
}

export default AddTask
