import React from "react";
import { ImCart } from "react-icons/im";
import { Link } from "react-router-dom";

function NavBar({ cartNum }) {
  return (
    <div className="navBar">
      <Link to="/">My Store</Link>
      <Link to="/cart" className="cart-items">
        <ImCart />
        <div className="cart-num">{cartNum}</div>
      </Link>
      <div
        className="links"
        style={{
          top: 0,
          marginLeft: 700,
          flexDirection: "column",
        }}
      >
        <Link to="/about" style={{ marginLeft: 10 }}>
          O nama
        </Link>
        <Link to="/meni" style={{ marginLeft: 10 }}>
          Meni
        </Link>
        <Link to="/contact" style={{ marginLeft: 10 }}>
          Kontakt
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
