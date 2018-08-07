import React from "react";
import logoAda from "../images/logo-adalab-80px.png";

class Footer extends React.Component {
  render() {
    return (
      <div className="container__footer">
        <footer className="footer">
          <p className="footer__copyright">{this.props.copy}</p>
          <a href={this.props.href} target="_Blank">
            <img
              className="footer__logo--adalab"
              src={this.props.img}
              alt="Logotipo de Adalab"
            />
          </a>
        </footer>
      </div>
    );
  }
}

export default Footer;
