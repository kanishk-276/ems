import React from 'react'
import Header from '../../other/Header'


export const AdminDashboard = () => {
  return (
<div className='w-screen overflow-x-auto h-full bg-neutral-900 text-white p-6'>
    <Header/>
    <div className="p-4 rounded-xl bg-neutral-800  grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
            <div>
                <label htmlFor="task-title" className="block text-sm font-medium text-gray-400 mb-2">Task Details</label>
                <input type="text" id="task-title" placeholder="Task title" className="w-full bg-gray-800 text-gray-300 border-gray-700 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-teal-500"/>
            </div>
            <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-400 mb-2">Date</label>
                <input type="text" id="date" placeholder="dd/mm/yyyy" className="w-full bg-gray-800 text-gray-300 border-gray-700 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-teal-500"/>
            </div>
            <div>
                <label htmlFor="assign-to" className="block text-sm font-medium text-gray-400 mb-2">Assign to</label>
                <input type="text" id="assign-to" placeholder="employee name" className="w-full bg-gray-800 text-gray-300 border-gray-700 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-teal-500"/>
            </div>
            <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-400 mb-2">Category</label>
                <input type="text" id="category" placeholder="design, dev, etc" className="w-full bg-gray-800 text-gray-300 border-gray-700 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-teal-500"/>
            </div>
        </div>
        <div className="flex flex-col h-full">
            <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-400 mb-2">Description</label>
                <textarea id="description" rows="12" className="w-full bg-gray-800 text-gray-300 border-gray-700 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-teal-500 resize-none"></textarea>
            </div>
            <div className="mt-4 md:mt-auto">
                <button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
                    Create Task
                </button>
            </div>
        </div>
    </div>
    
    {/* New Task Section with Different Colors */}
    <div id='taskLisst' className=" p-4 rounded-xl bg-neutral-800 mt-8 max-h-52 space-y-4 overflow-y-auto">
        <div className="bg-red-500 rounded-lg p-4 flex justify-between items-center">
            <span className="font-semibold text-lg">Sarthak</span>
            <span>Make a UI Design</span>
        </div>
        <div className="bg-green-500 rounded-lg p-4 flex justify-between items-center">
            <span className="font-semibold text-lg">Sarthak</span>
            <span>Make a UI Design</span>
        </div>
        <div className="bg-yellow-500 rounded-lg p-4 flex justify-between items-center">
            <span className="font-semibold text-lg">Sarthak</span>
            <span>Make a UI Design</span>
        </div>
        <div className="bg-blue-500 rounded-lg p-4 flex justify-between items-center">
            <span className="font-semibold text-lg">Sarthak</span>
            <span>Make a UI Design</span>
        </div>
        <div className="bg-purple-500 rounded-lg p-4 flex justify-between items-center">
            <span className="font-semibold text-lg">Sarthak</span>
            <span>Make a UI Design</span>
        </div>
        <div className="bg-purple-500 rounded-lg p-4 flex justify-between items-center">
            <span className="font-semibold text-lg">Sarthak</span>
            <span>Make a UI Design</span>
        </div>
    </div>
</div>
  )
}

export default AdminDashboard;


