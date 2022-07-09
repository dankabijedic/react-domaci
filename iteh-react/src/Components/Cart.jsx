import React from "react";
import CartItem from "./CartItem";

const Cart = ({ cartItems, cartNum, totalPrice }) => {
  return (
    <div className="cart-container">
      <h1>Ovo je vasa korpa.</h1>
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <div className="cart-footer">
        <div className="cart-amount">Broj proizvoda u korpi je: {cartNum}</div>
        <div className="cart-amount">Ukupna cena je: {totalPrice}</div>
      </div>
    </div>
  );
};

export default Cart;
