import { useState } from "react";
import { createContext } from "vm";

export type AuthUser = {
  name: string;
  email: string;
};

type UserContextProviderProps = {   
  children: React.ReactNode;
};

type UserContextType = {
    user:AuthUser|null
}
export const UserContext = createContext(null);

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [user, setUser] = useState<AuthUser | null>(null);

  return(
    <UserContext.Provide>{children}</UserContext.Provide>
  )
};
