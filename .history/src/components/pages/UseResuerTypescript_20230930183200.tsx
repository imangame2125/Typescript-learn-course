import React, { useReducer } from "react";

const initialValue = { count: 0 };

function reducer(
  state: { count: number },
  action: { type: "string"; payload: number }
) {
  switch (action.type) {
    case "INC":
      return {
        count: state.count + action.payload,
      };

    case "DEC":
      return {
        count: state.count - action.payload,
      };

    default:
      return {
        state,
      };
  }
}
const UseResuerTypescript = () => {
  const [state, dispatch] = useReducer(reducer, initialValue);

  const handleInc = () => {
    dispatch({
      type: "INC",
      payload: 10,
    });
  };
  return (
    <div>
      Count:
      <button onClick={handleInc}>Inc</button>
      <button onClick={handleDec}>Dec</button>
    </div>
  );
};

export default UseResuerTypescript;
