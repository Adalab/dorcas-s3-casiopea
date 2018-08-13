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
          <main class="main">
            <img class="main__logo" src= {logoAwesome} alt="imagen-logo"/>
            <h1 class="main__title">Crea tu tarjeta de visita</h1>
            <p class="main__text">Crea mejores contactos profesionales de manera fácil y cómoda</p>
            <ul class="main__list--container">
              <div class="main__list--box">
                <li class="main__list--item"><i class="far fa-object-ungroup main__list--icon"></i>Diseña</li>
              </div>
              <div class="main__list--box">
                <li class="main__list--item"> <i class="far fa-keyboard main__list--icon"></i>Rellena</li>
              </div>
              <div class="main__list--box">
                <li class="main__list--item"><i class="fas fa-share-alt main__list--icon"></i>Comparte</li>
              </div>
            </ul>
            <div class="main__button uppercase">
              <Link to='/Pag'> <a class="main__button--link" href="card.html">Comenzar</a> </Link>
            </div>
          </main>

          <Footer />

        </body>
      </div>
    );
  }
}

export default PagInicio;
