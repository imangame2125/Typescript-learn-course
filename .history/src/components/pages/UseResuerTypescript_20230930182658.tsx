import React, { useReducer } from "react";

const initialValue = { count: 0 };

function reducer()
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
