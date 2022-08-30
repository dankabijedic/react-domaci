import React from "react";
import CartItem from "./CartItem";
import { IoIosAddCircleOutline } from "react-icons/io";

const Cart = ({ cartItems, cartNum, totalPrice, onIncrease, onDecrease }) => {
  return (
    <div className="cart-container">
      <h1>Ovo je vasa korpa.</h1>
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
          />
        ))}
      </div>
      <div className="cart-footer">
        <div className="cart-amount">Broj proizvoda u korpi je: {cartNum}</div>
        <div className="cart-amount">Ukupna cena je: {totalPrice}</div>
        <a className="btn">
          Naruci
          <button className="btn" style={{ size: 10 }}>
            <IoIosAddCircleOutline />
          </button>
        </a>
      </div>
    </div>
  );
};

export default Cart;
