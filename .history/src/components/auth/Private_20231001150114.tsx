import React from "react";
import LogIn from "./LogIn";
import { ProfileProps } from "./Profile";

type PrivateProps = {
  isLoggedIn: boolean;
  Component: React.ComponentType<ProfileProps>;
};

const Private = ({ isLoggedIn, Component }: PrivateProps) => {
  if (isLoggedIn) {
    return <Component name='Iman' />;
  } else {
    return <LogIn />;
  }
};

export default Private;
