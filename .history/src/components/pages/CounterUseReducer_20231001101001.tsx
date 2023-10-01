import React, { useReducer } from "react";


function reducer(state,action){
    default:
        return{
            state
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
