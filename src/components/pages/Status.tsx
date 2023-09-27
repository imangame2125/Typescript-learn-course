import React from "react";
import { StatusProps } from "../types/StatusProps";
//a Union of string literals

const Status = ({ status }: StatusProps) => {
  let message;
  if (status === "loading") {
    message = "Loading...";
  } else if (status === "success") {
    message = "Data fetched successfully!";
  } else if (status === "error") {
    message = "Error fetching data";
  }
  return (
    <div>
        <h2>Sttatus - {message}</h2>
    </div>
  );
};

export default Status;
