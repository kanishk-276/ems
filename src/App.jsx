import React, { useContext } from 'react'
import { useState } from 'react';
import Login from './components/Auth/Login'
import Employee from './components/Dashboard/EmployeeDashboard';
import  AdminDashboard  from './components/Dashboard/AdminDashboard';
import { AuthContext } from './context/AuthProvider';



const App = () => {
    const [user, setUser] = useState();
    
    
  const handleLogin =(email,password) =>{
    if(email == 'admin@me.com' && password == 'admin123'){
      alert("Admin login successfull");
      setUser('admin');
    }
    else if(email == 'employee@me.com' && password == 'employee123'){
      alert("Employee login successfull");
      setUser('employee');
    }
    else{
      alert("invalid credentials");
    }
  }
    const authData = useContext(AuthContext);
  console.log(authData);

  return (
    <>
    {!user ? <Login handleLogin={handleLogin} />:''}
    {user == 'admin' ? <AdminDashboard/>: <Employee/>}
    </>
  )
}

export default App