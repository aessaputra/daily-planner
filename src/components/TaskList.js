import React, { useContext } from 'react'
import { TaskContext } from '../context/TaskContext'
import TaskItem from './TaskItem'

const TaskList = () => {
  const { tasks, filter, setFilter } = useContext(TaskContext)

  const filteredTasks = filter
    ? tasks.filter((task) => task.category === filter)
    : tasks

  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="mb-4 p-2 border border-gray-300 rounded"
      >
        <option value="">Semua Kategori</option>
        <option value="red">Merah</option>
        <option value="green">Hijau</option>
        <option value="blue">Biru</option>
        <option value="yellow">Kuning</option>
        <option value="purple">Ungu</option>
      </select>

      {filteredTasks.length === 0 ? (
        <p>Tidak ada tugas yang ditambahkan.</p>
      ) : (
        filteredTasks.map((task, index) => (
          <TaskItem key={index} task={task} index={index} />
        ))
      )}
    </div>
  )
}

export default TaskList
