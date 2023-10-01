import { createContext,useState } from "vm";

export type AuthUser = {
    name:string;
    email:string
}


type UserContextProviderProps = {
    children:React.ReactNode
}

export const UserContext = createContext(null);


export const UserContextProvider = ({children}:UserContextProviderProps)=>{
    return(
        <UserContext.Provider>{children}</UserContext.Provider>
    )
}