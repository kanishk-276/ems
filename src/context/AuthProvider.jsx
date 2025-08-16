import React, { createContext } from 'react'
const AuthContext = createContext();

const AuthProvider = ({children}) => {
  return (
    <div>
        <AuthProvider>
        {children}
        </AuthProvider>
    </div>
  )
}

export default AuthProvider