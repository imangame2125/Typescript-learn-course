import React from "react";
import { HeadingProps } from "../types/HeadingProps";

//children props
const Heading = ({ children }: HeadingProps) => {
  return <div>{children}</div>;
};

export default Heading;
