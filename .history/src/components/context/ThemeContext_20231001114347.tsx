import { createContext } from "vm";
import { theme } from "./theme";

type ThemeContextProviderProps = {
    children:React.ReactNode
}

const ThemeContext = createContext(theme);
