import React from 'react'


const reducer = (state,action)=>{
    switch(action.type){
      default:
        return{
          state
        }
    }
}
const CounterUseReducer = () => {
  return (
    <div>
      <h1>Count :</h1>
      <button>+</button>
      <button>-</button>
    </div>
  )
}

export default CounterUseReducer