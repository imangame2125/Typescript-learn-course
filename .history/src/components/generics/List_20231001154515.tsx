import React from 'react'

export const List = ({items,onClick}) => {
  return (
    <div>
        <h2>List of items</h2>
        {items.map((item)=>{
            return(
                <div>{item}</div>
            )
        })}
    </div>
  )
}
