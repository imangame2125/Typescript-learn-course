import React, { useReducer } from "react";
const initialValue = {
  count: 0,
};

const reducer = (state:{count:number}, action:{type:string,payload:number}) => {
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
      <h1>Count :</h1>
      <button>+</button>
      <button>-</button>
    </div>
  );
};

export default CounterUseReducer;
