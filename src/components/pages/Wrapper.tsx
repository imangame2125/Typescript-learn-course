import React from "react";
import { WrapperProps } from "../types/WrapperProps";
//children props when type is React.ReactNode

export const Wrapper = ({ children }: WrapperProps) => {
  return <div>{children}</div>;
};
