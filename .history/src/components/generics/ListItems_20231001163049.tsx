import React from "react";

type ListItemsProps = {
  items: any
  onClick: (value: string | number) => void;
};

const ListItems = ({ items, onClick }: ListItemsProps) => {
  return (
    <div>
      {items.map((item) => {
        return (
          <div key={item.id} onClick={() => onClick(item)}>
            {item}
          </div>
        );
      })}
    </div>
  );
};

export default ListItems;
