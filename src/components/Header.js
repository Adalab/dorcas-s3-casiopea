import React from 'react';
import image from "../images/awesomecards.svg";

class Header extends React.Component {
  render(){
     return (
      <div className="container__header">
        <header className="header">
          <img src={image} alt="Logo de Awesome Cards" className="header__logo" />
        </header>
      </div>
    );
  }
}

export default Header;
