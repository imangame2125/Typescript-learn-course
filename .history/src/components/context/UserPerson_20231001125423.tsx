import React, { useContext } from 'react'
import { UserContext } from './UserContext'

const UserPerson = () => {
        const userContext = useContext(UserContext)
    const handleLogin = ()=>{
        if(userContext){
            userContext.setUser({
                name:'Iman',
                email:'imanmajdabadifarahani1372@gmail.com'
            })
        }
    }


    const handleLogout = ()=>{
        if(userContext){
            userContext.setUser(null)
        }
    }
  return (
    <div>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>Logout</button>

        <div>User name is</div>
        <div>User email is</div>
    </div>
  )
}

export default UserPerson