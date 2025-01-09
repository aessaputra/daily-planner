import React, { useContext, useState } from 'react'
import { TaskContext } from '../context/TaskContext'
import EditTask from './EditTask'

const TaskItem = ({ task, index }) => {
  const { deleteTask, categories } = useContext(TaskContext)
  const [isEditing, setIsEditing] = useState(false)

  // Mencari kategori yang sesuai dengan tugas
  const category = categories.find((cat) => cat.value === task.category)

  return (
    <div className="flex flex-col mb-2">
      {isEditing ? (
        <EditTask
          task={task}
          index={index}
          onClose={() => setIsEditing(false)}
        />
      ) : (
        <div className="flex justify-between items-center p-4 border-b border-gray-300 bg-white shadow-md rounded-lg">
          <div className="flex items-center">
            {category && (
              <span className={`${category.color} text-white p-1 rounded`}>
                {category.name}
              </span>
            )}
            <span className="ml-2 font-semibold">{task.task}</span>
          </div>
          <div>
            {task.reminder && (
              <div className="text-sm text-gray-500 ml-4">
                Pengingat:{' '}
                <span className="font-medium">
                  {new Date(task.reminder).toLocaleString()}
                </span>
              </div>
            )}
          </div>
          <div>
            <button
              className="text-blue-500 mr-2"
              onClick={() => setIsEditing(true)}
            >
              Edit
            </button>
            <button className="text-red-500" onClick={() => deleteTask(index)}>
              Hapus
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default TaskItem