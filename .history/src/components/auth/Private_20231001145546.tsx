import React from "react";
import LogIn from "./LogIn";

const Private = ({ isLoggedIn, Component }) => {
  if (isLoggedIn) {
    return <Component />;
  } else {
    return <LogIn/>;
  }
};

export default Private;
