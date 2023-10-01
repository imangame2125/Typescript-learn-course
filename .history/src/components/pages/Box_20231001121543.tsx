import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Box = () => {
  const theme = useContext(ThemeContext);
  return (
    <div
      style={{ background: theme.primary.main, color: theme.secondary.text }}
    >
      Theme Box

      <h3 style={{background:theme.secondary.main,color:theme.success.text}}>imangame</h3>
    </div>
  );
};

export default Box;
