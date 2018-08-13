import React from 'react';
import Footer from "./Footer";
import logoAda from "../images/logo-adalab-80px.png";
import logoAwesome from "../images/awesomecards.svg";
import { Link } from 'react-router-dom';

class PagInicio extends React.Component {
  render(){
     return (
      <div>
        <body>
          <main className="main">
            <img className="main__logo" src= {logoAwesome} alt="imagen-logo"/>
            <h1 className="main__title">Crea tu tarjeta de visita</h1>
            <p className="main__text">Crea mejores contactos profesionales de manera fácil y cómoda</p>
            <ul className="main__list--container">
              <div className="main__list--box">
                <li className="main__list--item"><i className="far fa-object-ungroup main__list--icon"></i>Diseña</li>
              </div>
              <div className="main__list--box">
                <li className="main__list--item"> <i className="far fa-keyboard main__list--icon"></i>Rellena</li>
              </div>
              <div className="main__list--box">
                <li className="main__list--item"><i className="fas fa-share-alt main__list--icon"></i>Comparte</li>
              </div>
            </ul>
            <div className="main__button uppercase">
              <Link to='/Pag'> <a className="main__button--link" href="card.html">Comenzar</a> </Link>
            </div>
          </main>

          <Footer />

        </body>
      </div>
    );
  }
}

export default PagInicio;
