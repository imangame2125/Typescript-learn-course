import React from "react";

type ListItemsProps = {
  items: string[] | number[] | string;
  onClick: (value: string | number) => void;
};

const ListItems = ({items,onClick}:ListItemsProps) => {
  return <div>
    {items.map((item,index)=>{
        return(
            <div>{item}</div>
        )
    })}
  </div>;
};

export default ListItems;
