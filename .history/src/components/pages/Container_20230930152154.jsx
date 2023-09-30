import React, { useReducer } from "react";

const initialState = { count: 0 };


function reducer(state,action){
    switch(action.type){
        case 'INCREMENT'
        return {count:state.count + action.type} 
    }
}
const Container = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <div>Container</div>;
};

export default Container;
