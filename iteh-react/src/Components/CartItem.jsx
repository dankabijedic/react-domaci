import React from "react";
import { ImPlus, ImMinus } from "react-icons/im";

const CartItem = ({ item, onIncrease, onDecrease }) => {
  return (
    <div className="card " style={{ margin: 10, borderStyle: "solid" }}>
      <img className="card-img-top" src={item.image} alt="Neka slika" />
      <div className="card-body">
        <h3 className="card-title">{item.title}</h3>
        <p className="card-text">Sastojci: {item.ingredients}</p>
        <h5 className="price">Cena: {item.price}</h5>
        <a className="btn" onClick={() => onIncrease(item.id)}>
          <button className="btn" style={{ size: 10 }}>
            <ImPlus />
          </button>
        </a>
        <h5 className="amount">{item.amount}</h5>
        <a className="btn" onClick={() => onDecrease(item.id)}>
          <button className="btn" style={{ size: 10 }}>
            <ImMinus />
          </button>
        </a>
      </div>
    </div>
  );
};

export default CartItem;
