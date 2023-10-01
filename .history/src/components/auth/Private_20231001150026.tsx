import React from "react";
import LogIn from "./LogIn";

type PrivateProps = {
  isLoggedIn: boolean;
  Component: React.ComponentType;
};

const Private = ({ isLoggedIn, Component }: PrivateProps) => {
  if (isLoggedIn) {
    return <Component name='Iman' />;
  } else {
    return <LogIn />;
  }
};

export default Private;
