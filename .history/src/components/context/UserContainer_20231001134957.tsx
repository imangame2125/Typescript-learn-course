import React, { useContext } from 'react'
import { UserContext } from './UserContext'
const UserContext = () => {
  const userContext = useContext(UserContext)
    const handleLogin = ()=>{

    }
    const handleLogout = ()=>{}
  return (
    <div>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>Logout</button>
        <div>User name is</div>
        <div>User email is</div>
    </div>
  )
}

export default UserContext