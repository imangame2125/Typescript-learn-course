import React from "react";
import { PersonProps } from "../types/PersonProps";

const Person = ({ name: { firstName, lastName } }: PersonProps) => {
  return (
    <div>
      <h1>Your firstname is : {firstName}</h1>
      <h2>your lastname is : {lastName}</h2>
    </div>
  );
};

export default Person;
