import React, { useContext } from 'react'
import { UserContext } from './UserContext'

const UserPerson = () => {
        const userContext = useContext(UserContext)
    const handleLogin = ()=>{}
    const handleLogout = ()=>{}
  return (
    <div>
        <button>Login</button>
        <button>Logout</button>

        <div>User name is</div>
        <div>User email is</div>
    </div>
  )
}

export default UserPerson