import React, { useState } from 'react'
import { format, startOfWeek, addDays, isToday } from 'date-fns'

const Calendar = () => {
  const [currentDate] = useState(new Date())
  const startWeek = startOfWeek(currentDate, { weekStartsOn: 1 })
  const days = Array.from({ length: 7 }, (_, i) => addDays(startWeek, i))

  return (
    <div className="mb-4 p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-2 text-center">
        {format(currentDate, 'MMMM yyyy')}
      </h2>
      <div className="grid grid-cols-7 gap-2">
        {days.map((day) => (
          <div
            key={day}
            className={`p-4 border rounded-lg ${
              isToday(day) ? 'bg-blue-200' : 'bg-gray-100'
            }`}
          >
            <div className="font-bold text-lg">{format(day, 'd')}</div>
            <div className="text-sm text-center">{format(day, 'EEEE')}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Calendar
