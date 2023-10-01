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