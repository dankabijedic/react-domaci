import React from "react";

function Header() {
  return (
    <header
      className="masthead"
      style={{ backgroundImage: `url("./img/pizza-header.jpeg")` }}
    >
      <div className="container">
        <div className="intro-text">
          <div className="intro-lead-in">Picerija Palermo</div>
          <div className="intro-heading text-uppercase">Dobrodosli!</div>
          {/* {this.props.showbutton && 
            <Link className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" to={this.props.link}>{this.props.bottomtext}</Link>
        } */}
        </div>
      </div>
    </header>
  );
}

export default Header;
