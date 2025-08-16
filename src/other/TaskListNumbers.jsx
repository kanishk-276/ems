import React from 'react'

export const TaskListNumbers = () => {
  return (
    <div>
          <div>
        <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-blue-600 rounded-md p-4">
            <div className="text-5xl font-bold">0</div>
            <div className="text-lg">New Task</div>
        </div>
        <div className="bg-green-600 rounded-md p-4">
            <div className="text-5xl font-bold">3</div>
            <div className="text-lg">Completed</div>
        </div>
        <div className="bg-yellow-500 rounded-md p-4">
            <div className="text-5xl font-bold">0</div>
            <div className="text-lg">Accepted</div>
        </div>
        <div className="bg-red-500 rounded-md p-4">
            <div className="text-5xl font-bold">1</div>
            <div className="text-lg">Failed</div>
        </div>
    </div>

</div>
    </div>
  )
}

export default TaskListNumbers;