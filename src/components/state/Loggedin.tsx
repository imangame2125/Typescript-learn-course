import React, { useState } from "react";

const Loggedin = () => {
  const [isLoggedIn, setIsLoggeIn] = useState(false);
  const handleLogIn = () => {
    setIsLoggeIn(true);
  };

  const handleLogOut = () => {
    setIsLoggeIn(false);
  };
  return (
    <div>
      <button>Login</button>
      <button>Logout</button>
      <div>{isLoggedIn ? "logged in" : "logged out"}</div>
    </div>
  );
};

export default Loggedin;
