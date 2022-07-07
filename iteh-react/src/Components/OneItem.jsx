import React from "react";
import { IoMdAddCircleOutline } from "react-icons/io";

const OneItem = ({ item, onOrder }) => {
  return (
    <div className="card" style={{ margin: 10, borderStyle: "dashed" }}>
      <img
        className="card-img-top"
        src="https://picsum.photos/200"
        alt="Neka slika"
      />
      <div className="card-body">
        <h3 className="card-title">{item.title}</h3>
        <p className="card-text">{item.ingredients}</p>
        <h5 className="price">{item.price}</h5>
        <a className="btn" onClick={() => onOrder(item.id)}>
          Naruci
          <button className="btn" style={{ size: 10 }}>
            <IoMdAddCircleOutline />
          </button>
        </a>
      </div>
    </div>
  );
};

export default OneItem;
