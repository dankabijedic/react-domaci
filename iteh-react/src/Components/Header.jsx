import React from "react";

function Header({ title, subtitle }) {
  return (
    <header className="masthead">
      <div className="container">
        <div className="intro-text">
          <div className="intro-lead-in">{title}</div>
          <div className="intro-heading text-uppercase">{subtitle}</div>
        </div>
      </div>
    </header>
  );
}

export default Header;
