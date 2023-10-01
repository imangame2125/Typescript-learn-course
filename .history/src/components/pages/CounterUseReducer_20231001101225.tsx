import React, { useReducer } from "react";

function reducer(state, action) {
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
  return (
    <div>
      Count:
      <button>+</button>
      <button>-</button>
    </div>
  );
};

export default CounterUseReducer;
