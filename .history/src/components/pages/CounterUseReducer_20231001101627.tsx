import React, { useReducer } from "react";

type stateProps = {
  count: number;
};

type actionProps = {
  type: string;
  payload: number;
};

function reducer(state: stateProps, action: actionProps) {
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
        state
      };
  }
}
const CounterUseReducer = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const handleInc = () => {
    dispatch({
      type: "INC",
      payload: 0
    });
  };

  const handleDec = () => {
    dispatch({
      type: "DEC",
      payload: 0,
    });
  };
  return (
    <div>
      Count:{state.count}
      <button onClick={handleInc}>+</button>
      <button onClick={handleDec}>-</button>
    </div>
  );
};

export default CounterUseReducer;
