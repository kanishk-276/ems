import React from 'react'
import { useState } from 'react';


export const Login = ({handleLogin}) => {
    const [email, setEmail] =  useState('');
    const [password, setPassword] =  useState('');

const SubmitHandler = (e)=>{
    e.preventDefault();
    handleLogin(email,password)
    setEmail('');
    setPassword('');
}
  return (
    <div className=' bg-neutral-900 flex h-screen w-screen items-center justify-center'>
        <div>
            <form onSubmit = {(e)=>{SubmitHandler(e)}} className=' rounded-3xl p-20 border-2 border-emerald-600 flex flex-col items-center justify-center'>
               
                <input  value = {email}
                onChange={(e)=>{
                    setEmail(e.target.value)  
                }} required className=' mt-5 text-white placeholder-gray-400 outline-none border-2 border-emerald-600 rounded-full py-2 px-6 text-xl' type='email' placeholder='enter your email' />
               
                <input 
                    value={password}
                    onChange={(e)=>{
                    setPassword(e.target.value)  
                }}
                required className=' mt-5 text-white placeholder-gray-400 outline-none border-2 border-emerald-600 rounded-full py-2 px-6 text-xl' type='password' placeholder='enter your password'/>
                <button className=' mt-5 text-white outline-none  bg-emerald-600 rounded-full py-2 px-6 text-xl'>Log in</button>
            </form>
        </div>
    </div>
  )
}
export default Login;
