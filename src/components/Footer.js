import React from 'react';
import logoAda from "../images/logo-adalab-80px.png";

class Footer extends React.Component {
  render(){
    return (
      <div className="container__footer">
        <footer className="footer">
          <p className="footer__copyright">Awesome profile-cards ©2018</p>
          <a href="http://www.adalab.es" target="_Blank">
            <img
              className="footer__logo--adalab"
              src={logoAda}
              alt="Logotipo de Adalab"
            />
          </a>
        </footer>
      </div>
    );
  }
}

export default Footer;
