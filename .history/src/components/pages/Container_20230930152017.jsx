import React, { useReducer } from "react";

const initialState = { count: 0 };

const Container = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <div>Container</div>;
};

export default Container;
