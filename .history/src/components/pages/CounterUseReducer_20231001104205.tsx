import React, { useReducer } from "react";
const initialValue = {
  count: 0,
};

type CounterState = {
  count:number
}

type CounterAction = {
  type:string;
  payload:number
}
const reducer = (state: { count: number }, action: { type: string; payload?: number }) => {
  switch (action.type) {
    case 'INC':
      return { ...state, count: state.count + (action.payload || 0) };

      case 'DEC':
        return { ...state, count: state.count - (action.payload || 0) };
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
    </div>
  );
};

export default CounterUseReducer;
