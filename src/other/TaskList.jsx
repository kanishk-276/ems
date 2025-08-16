import React from 'react'

export const taskList = () => {
  return (
    <div id='taskLisst' className='pr-8 pl-20 w-screen gap-7 min-h-fit overflow-x-auto flex justify-center items-center'>

    
        <div className="space-y-4 min-w-100">
        <div className="min-h-90 bg-red-400 rounded-md p-4">
            <div className="flex items-center justify-between mb-2">
                <div className="bg-red-800 text-white text-xs font-bold px-2 py-1 rounded uppercase">High</div>
                <div className="text-sm text-gray-100">20 Feb 2024</div>
            </div>
            <h2 className="text-lg font-semibold">Ek aur task</h2>
            <p className="text-gray-100 text-sm">Task jaisa kabhi nahi dekha hoga waisa</p>
        </div>
    </div>

    
    
        <div className="space-y-4 min-w-100">
        <div className="min-h-90 bg-green-400 rounded-md p-4">
            <div className="flex items-center justify-between mb-2">
                <div className="bg-red-800 text-white text-xs font-bold px-2 py-1 rounded uppercase">High</div>
                <div className="text-sm text-gray-100">20 Feb 2024</div>
            </div>
            <h2 className="text-lg font-semibold">Ek aur task</h2>
            <p className="text-gray-100 text-sm">Task jaisa kabhi nahi dekha hoga waisa</p>
        </div>
    </div>

       <div className="space-y-4 min-w-100">
        <div className="min-h-90 bg-blue-400 rounded-md p-4">
            <div className="flex items-center justify-between mb-2">
                <div className="bg-red-800 text-white text-xs font-bold px-2 py-1 rounded uppercase">High</div>
                <div className="text-sm text-gray-100">20 Feb 2024</div>
            </div>
            <h2 className="text-lg font-semibold">Ek aur task</h2>
            <p className="text-gray-100 text-sm">Task jaisa kabhi nahi dekha hoga waisa</p>
        </div>
    </div>

       <div className="space-y-4 min-w-100">
        <div className="min-h-90 bg-yellow-400 rounded-md p-4">
            <div className="flex items-center justify-between mb-2">
                <div className="bg-red-800 text-white text-xs font-bold px-2 py-1 rounded uppercase">High</div>
                <div className="text-sm text-gray-100">20 Feb 2024</div>
            </div>
            <h2 className="text-lg font-semibold">Ek aur task</h2>
            <p className="text-gray-100 text-sm">Task jaisa kabhi nahi dekha hoga waisa</p>
        </div>
    </div>
    </div>
  )
}
export default taskList;

