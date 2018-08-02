import React from "react";
class Header extends React.Component {
  render() {
    return (
      <div className="container__header">
        <header className="header">
          <img
            src={this.props.img}
            alt="Logo de Awesome Cards"
            className="header__logo"
          />
        </header>
      </div>
    );
  }
}

export default Header;
