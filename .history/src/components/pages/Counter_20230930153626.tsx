import React, { useReducer } from "react";

const initialState = { count: 0 };

type CounterState = {
  count: number;
};
function reducer(state:CounterState, action) {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + action.payload,
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
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleInc = () => {
    dispatch({
      type: "INCREMENT",
      payload: 10,
    });
  };
  return (
    <>
      Count: {state.count}
      {/* <button onClick={() => dispatch({ type: "INCREMENT", payload: 10 })}> */}
      <button onClick={handleInc}>Increment 10</button>
      <button onClick={() => dispatch({ type: "DECREMENT", payload: 10 })}>
        Decrement 10
      </button>
    </>
  );
};

export default Container;
