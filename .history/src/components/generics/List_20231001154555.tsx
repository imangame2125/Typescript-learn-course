import React from 'react'

export const List = ({items,onClick}) => {
  return (
    <div>
        <h2>List of items</h2>
        {items.map((item,index)=>{
            return(
                <div onClick={()=>onClick(item)} key={index}>{item}</div>
            )
        })}
    </div>
  )
}
