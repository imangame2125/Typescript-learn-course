import React from "react";
import { GreetProps } from "../types/GreetProps";

//optional props

export const Greet = ({ name, messageCount = 0, isLoggedIn }: GreetProps) => {
  return (
    <div>
      {isLoggedIn ? (
        <h1>{`welcome ${name} and messageCount is ${messageCount}`}</h1>
      ) : (
        <h2>its bad...</h2>
      )}
    </div>
  );
};
