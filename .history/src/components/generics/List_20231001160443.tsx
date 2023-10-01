    import React from "react";

    type ListProps<T> = {
    items: T[];
    onClick: (value: T) => void;
    };
    export const List = <T extends {id:number}>({ items, onClick }: ListProps<T>) => {
    return (
        <div>
        <h2>List of items</h2>
        {items.map((item, id) => {
            return (
            <div onClick={() => onClick(item)} key={item.id}>
                {String(item.id)}
            </div>
            );
        })}
        </div>
    );
    };
