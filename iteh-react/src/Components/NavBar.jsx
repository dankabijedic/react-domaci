import React from "react";
import { ImCart } from "react-icons/im";

function NavBar({ cartNum }) {
  return (
    <div className="navBar">
      <a>My Store</a>
      <a className="cart-items">
        <ImCart style={{ marginLeft: 10 }} />
        <div className="cart-num">{cartNum}</div>
      </a>
    </div>
  );
}

export default NavBar;
