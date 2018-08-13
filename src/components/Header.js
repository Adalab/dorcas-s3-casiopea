import React from "react";
import {Link} from "react-router-dom";


class Header extends React.Component {
  render() {
    return (
      <div className="container__header">
        <header className="header">
          <Link to='/'><img
            src={this.props.img}
            alt="Logo de Awesome Cards"
            className="header__logo"
          /></Link>
        </header>
      </div>
    );
  }
}

export default Header;
