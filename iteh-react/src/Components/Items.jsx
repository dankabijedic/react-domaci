import React from "react";
import OneItem from "./OneItem";

const Items = ({ items, onOrder }) => {
  return (
    <div className="all-items">
      {items.map((item) => (
        <OneItem key={item.id} item={item} onOrder={onOrder} />
      ))}
    </div>
  );
};

export default Items;
