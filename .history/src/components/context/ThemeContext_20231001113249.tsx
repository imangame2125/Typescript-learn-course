import { createContext } from "vm";
import { theme } from "./theme";

const ThemeContext = createContext(theme)

type ThemeContextProviderProps = {
    children:React.ReactNode
}

const ThemeContextProvider = ({children}:ThemeContextProviderProps)=>{
    return(
        
    )
}