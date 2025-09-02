import React, { useContext } from 'react'
import { useState } from 'react';
import Login from './components/Auth/Login'
import Employee from './components/Dashboard/EmployeeDashboard';
import  AdminDashboard  from './components/Dashboard/AdminDashboard';
import { AuthContext } from './context/AuthProvider';


 const App = () => { 
    const [user, setUser] = useState();
        const authData = useContext(AuthContext);
        console.log(authData);
    const [loggedInUserData, setLoggedInUserData] = useState(null);
        
  const handleLogin =(email,password) =>{
    if(email == 'admin@me.com' && password == 'admin123'){
      alert("Admin login successfull");
      setUser('admin'); 
    }

    else if (authData && Array.isArray(authData.employees) && 
         authData.employees.find((e) => email === e.email && e.password === password)) {

    const employee = authData.employees.find((e) => email === e.email && e.password === password);
    setUser(employee);
    localStorage.setItem('loggedInUser', JSON.stringify(employee));
    alert("Employee login successful");
}

    else{
      alert("invalid credentials");
    }
  }
  
  return (
    <>
    {!user ? <Login handleLogin={handleLogin} />:''}
    {user == 'admin' ? <AdminDashboard/>:''}
    {user == 'employee' ? <Employee/>:''}
    </>
  )
}

export default App