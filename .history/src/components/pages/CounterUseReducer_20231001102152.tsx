import React, { useReducer } from "react";

// type stateProps = {
//   count: number;
// };

// type actionProps = {
//   type: string;
//   payload: number;
// };

function reducer(state: {count:number}, action: {type:string;payload:number}) {
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
