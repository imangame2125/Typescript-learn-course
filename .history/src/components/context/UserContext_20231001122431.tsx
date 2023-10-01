import { createContext } from "vm";

export type AuthUser = {
    name:string;
    email:string;
}

export const UserContext = createContext(null)