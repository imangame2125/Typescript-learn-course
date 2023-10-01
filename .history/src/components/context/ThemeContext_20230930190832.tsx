import { createContext } from "react";
import { theme } from "./Theme";

const ThemeContext = createContext(theme);
type ThemeContextProviderProps = {
  children: React.ReactNode;
};

export const ThemeContextProvider = ({ children }) => {};
