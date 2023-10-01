import React, { useReducer } from "react";

const initialValue = { count: 0 };

function reducer(state:{count:number}, action:{type:'string',payload:number}) {
  switch (action.type) {
    case "INC":
      return {
        count: state.count + action.payload,
      };
  }
}
const UseResuerTypescript = () => {
  const [state, dispatch] = useReducer(reducer, initialValue);
  return (
    <div>
      Count:
      <button>Inc</button>
      <button>Dec</button>
    </div>
  );
};

export default UseResuerTypescript;
