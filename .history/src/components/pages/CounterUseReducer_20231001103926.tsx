import React, { useReducer } from "react";
const initialValue = {
  count: 0,
};

type CounterState = {

}

const reducer = (state, action) => {
  switch (action.type) {
    case "INC":
      return {
        ...state,
        count: state.count + action.payload,
      };

    case "DEC":
      return {
        ...state,
        count: state.count - action.payload,
      };

    default:
      return {
        state,
      };
  }
};
const CounterUseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialValue);
  return (
    <div>
      <h1>Count :{state}</h1>
      <button onClick={() => dispatch({ type: "INC", payload: 50 })}>+</button>
      <button onClick={() => dispatch({ type: "DEC", payload: 50 })}>-</button>
    </div>
  );
};

export default CounterUseReducer;
