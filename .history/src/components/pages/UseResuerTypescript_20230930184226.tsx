import React, { useReducer } from 'react';

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

const UseReducerTypescript = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const handleInc = () => {
    dispatch({
      type: 'INC',
      payload: 10,
    });
  };

  const handleDec = () => {
    dispatch({
      type: 'DEC',
      payload: 10,
    });
  };

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={handleInc}>Inc</button>
      <button onClick={handleDec}>Dec</button>
    </div>
  );
};

export default UseReducerTypescript;
