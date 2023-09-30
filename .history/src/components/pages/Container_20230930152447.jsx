import React, { useReducer } from "react";

const initialState = { count: 0 };


function reducer(state,action){
    switch(action.type){
        case 'INCREMENT'
        return{
            count:state.count + action.payload
        }
    }
}
const Container = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <>
    Count: {state.count}
    <button onClick={()=>dispatch({type:'INCREMENT'})}></button>
  </>;
};

export default Container;
