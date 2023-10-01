import React, { useReducer } from "react";

type State = {
  count: number;
};

type Action = {
  type: "INC" | "DEC";
  payload: number;
};


function reducer(
  state: { count: State },
  action: Action
) {
  switch (action.type) {
    case "INC":
      return { count: state.count + action.payload };

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
}
const CounterUseReducer = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const handleInc = () => {
    dispatch({
      type: "INC",
      payload: 5,
    });
  };

  const handleDec = () => {
    dispatch({
      type: "DEC",
      payload: 5,
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
