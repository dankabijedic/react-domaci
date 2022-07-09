import React from "react";
import { Link } from "react-router-dom";

function Header({ title, subtitle, image, showbutton }) {
  return (
    <header
      className="masthead"
      //     style={{ backgroundImage: `url(${props.image})` }}
    >
      <div className="container">
        <div className="intro-text">
          <div className="intro-lead-in">{title}</div>
          <div className="intro-heading text-uppercase">{subtitle}</div>
          {
            showbutton
            /* {showbutton && (
            <Link
              className="btn btn-primary btn-xl text-uppercase js-scroll-trigger"
              to={image}
            ></Link>
          )} */
          }
        </div>
      </div>
    </header>
  );
}

export default Header;
