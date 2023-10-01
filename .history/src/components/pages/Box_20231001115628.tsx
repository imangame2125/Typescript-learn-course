import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Box = () => {
  const theme: any = useContext(ThemeContext);
  {
    theme === null ? <div>iman</div> : <div>iman</div>;
  }
};

export default Box;
