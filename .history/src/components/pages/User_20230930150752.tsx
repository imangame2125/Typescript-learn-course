import React, { useState } from "react";
// import { UserProps } from "../types/UserProps";

type UserProps = {
  name: string;
  email: string;
};

const User = () => {
  const [user, setUser] = useState<UserProps>({} as UserProps);
  const handleLogin = () => {
    setUser({
      name: "iman",
      email: "imanclever51@gmail.com",
    });
  };

  const handleLogout = () => {
    setUser({name,email}: React.SetStateAction<UserProps>): void
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <p>User name is {user.name} </p>
      <p>User email is {user.email}</p>
    </div>
  );
};

export default User;
