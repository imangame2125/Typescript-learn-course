import React, { useReducer } from "react";
const initialValue = {
  count: 0,
};

type CounterState = {
  count: number;
};

type UpdateAction = {
  type: "INC" | "DEC";
  payload: number;
};

type CounterAction = UpdateAction
const reducer = (state: CounterState, action: CounterAction) => {
  switch (action.type) {
    case "INC":
      return { ...state, count: state.count + action.payload };

    case "reset":
      return initialValue;

    case "DEC":
      return { ...state, count: state.count - action.payload };
    default:
      return state;
  }
};
const CounterUseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialValue);
  return (
    <div>
      <h1>Count :{state.count}</h1>
      <button onClick={() => dispatch({ type: "INC", payload: 50 })}>+</button>
      <button onClick={() => dispatch({ type: "DEC", payload: 50 })}>-</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
};

export default CounterUseReducer;
