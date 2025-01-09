import React, { useState, useContext } from 'react'
import { TaskContext } from '../context/TaskContext'

const EditTask = ({ task, index, onClose }) => {
  const { tasks, setTasks, categories } = useContext(TaskContext)
  const [updatedTask, setUpdatedTask] = useState(task.task)
  const [updatedCategory, setUpdatedCategory] = useState(task.category)

  const handleUpdate = (e) => {
    e.preventDefault()
    const newTasks = [...tasks]
    newTasks[index] = { task: updatedTask, category: updatedCategory }
    setTasks(newTasks)
    onClose()
  }
  
  return (
    <form
      onSubmit={handleUpdate}
      className="flex flex-col mb-4 p-4 bg-white shadow-md rounded-lg"
    >
      <h2 className="text-xl font-bold mb-4">Edit Tugas</h2>
      <input
        type="text"
        value={updatedTask}
        onChange={(e) => setUpdatedTask(e.target.value)}
        className="p-3 border border-gray-300 rounded mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Tugas..."
        required
      />
      <select
        value={updatedCategory}
        onChange={(e) => setUpdatedCategory(e.target.value)}
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
      <button
        type="submit"
        className="bg-blue-500 text-white p-3 rounded hover:bg-blue-600 transition duration-200"
      >
        Perbarui Tugas
      </button>
      <button type="button" onClick={onClose} className="text-red-500 mt-2">
        Batal
      </button>
    </form>
  )
}

export default EditTask
