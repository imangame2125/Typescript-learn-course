import React, { useReducer } from "react";

function reducer(
  state: { count: number },
  action: { type: string; payload: number }
) {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + action.payload,
      };
    case "resut":
      return {
        count: 10,
      };

    case "DECREMENT":
      return {
        count: state.count - action.payload,
      };
    default:
      return state;
  }
}

const Container = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const handleInc = () => {
    dispatch({
      type: "INCREMENT",
      payload: 10,
    });
  };

  const handleDic = () => {
    dispatch({
      type: "DECREMENT",
      payload: 10,
    });
  };
  return (
    <>
      Count: {state.count}
      {/* <button onClick={() => dispatch({ type: "INCREMENT", payload: 10 })}> */}
      <button onClick={handleInc}>Increment 10</button>
      {/* <button onClick={() => dispatch({ type: "DECREMENT", payload: 10 })}> */}
      <button onClick={handleDic}>Decrement 10</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
};

export default Container;
