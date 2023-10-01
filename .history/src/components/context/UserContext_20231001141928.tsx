import { createContext, useState } from "react";

export type AuthUser = {
  name: string;
  email: string;
};
type UsaerContextType = {
  user: AuthUser | null;
  setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>;
};

type UserContextProviderProps = {
  children: React.ReactNode;
};

// export const UserContext = createContext<UsaerContextType | null>(null);
export const UserContext = createContext<UsaerContextType | null>({} as UsaerContextType);

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
