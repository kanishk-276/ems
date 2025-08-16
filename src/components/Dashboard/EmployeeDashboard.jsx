import React from 'react'
import Header from '../../other/Header';
import TaskListNumbers from '../../other/TaskListNumbers';
import TaskList from '../../other/TaskList';

export const EmployeeDashboard = () => {
  return (
    <div className=' h-screen text-white bg-neutral-900'>
        <Header/>
        <TaskListNumbers/>
        <TaskList/>
    </div>
  )
}

export default EmployeeDashboard;