import React from 'react';

class PagInicio extends React.Component {
  render(){
     return (
      <div>
        <body>
          <main class="main">
            <img class="main__logo" src="images/awesomecards.svg" alt="imagen-logo">
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
              <a class="main__button--link" href="card.html">Comenzar</a>
            </div>
          </main>


          <footer class="footer">
            <p class="footer__copyright">Awesome profile-cards ©2018</p>
            <img class="footer__logo--titanium" src="" alt="Logotipo de Titanium">
            <a href="http://www.adalab.es" target="_Blank"><img class="footer__logo--adalab" src="images/logo-adalab-80px.png" alt="Logotipo de Adalab"></a>
          </footer>

        </body>
      </div>
    );
  }
}

export default PagInicio;
