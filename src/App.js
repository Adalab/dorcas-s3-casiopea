import React, { Component } from "react";
import "./styles/main.css";
import image from "./images/awesomecards.svg";
import logoAda from "./images/logo-adalab-80px.png";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header class="header">
          <img src={image} alt="Logo de Awesome Cards" class="header__logo" />
        </header>
        <main class="page__main">
          <section class="visor">
            <button class="reset">
              <div class="reset__icon">
                <i class="far fa-trash-alt" />
              </div>
              <p class="reset__text">RESET</p>
            </button>
            <div class="card">
              <div class="card__head">
                <div class="card__head--border">
                  <div class="card__head--container">
                    <div class="card__name">
                      <p class="card__name--name" id="element-name">
                        Nombre Apellido
                      </p>
                      <div class="card__job">
                        <p class="card__job--job" id="element-role">
                          {" "}
                          Descripción
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card__pic" />

              <div class="card__foot">
                <div class="card__foot--social">
                  <div class="card__foot--icon mobile">
                    <a href="" class="mobileLink">
                      <i class="iconsocial fas fa-mobile-alt" />
                    </a>
                  </div>
                  <div class="card__foot--icon email">
                    <a href="" class="emailLink">
                      <i class="iconsocial far fa-envelope" />
                    </a>
                  </div>
                  <div class="card__foot--icon linkedin">
                    <a href="" class="linkedinLink">
                      <i class="iconsocial fab fa-linkedin-in" />
                    </a>
                  </div>
                  <div class="card__foot--icon github">
                    <a href="" class="githubLink">
                      <i class="iconsocial fab fa-github-alt" />
                    </a>
                  </div>
                </div>
                <div class="card__foot--skills" />
              </div>
            </div>
          </section>
          <section class="editor">
            <fieldset class="fieldset__rellena div__rellena collapsible">
              <div class="fieldset__container--title">
                <span class="fieldset__rellena--keyboard">
                  <i class="far fa-object-ungroup" />
                  <h2 class="fieldset__title">Diseña</h2>
                </span>
                <span class="fieldset__rellena--arrow collapsible__label">
                  <i class="fas fa-angle-up rotate" />
                </span>
              </div>
              <div class="diseña__colores collapsible__content">
                <h3 class="diseña__coloresfuentes uppercase">Colores</h3>
                <ul class="listadiseño">
                  <li class="diseña__colores--option">
                    <input
                      id="azul"
                      type="radio"
                      class="diseña__colores--paleta diseña--radio"
                      name="elección"
                    />
                    <div class="diseña__colores--colores1" />
                    <div class="diseña__colores--colores2" />
                    <div class="diseña__colores--colores3" />
                  </li>
                  <li class="diseña__colores--option">
                    <input
                      id="rojo"
                      type="radio"
                      class="diseña__colores--paleta diseña--radio"
                      name="elección"
                    />
                    <div class="diseña__colores--colores4" />
                    <div class="diseña__colores--colores5" />
                    <div class="diseña__colores--colores6" />
                  </li>
                  <li class="diseña__colores--option">
                    <input
                      id="gris"
                      type="radio"
                      class="diseña__colores--paleta diseña--radio"
                      name="elección"
                    />
                    <div class="diseña__colores--colores7" />
                    <div class="diseña__colores--colores8" />
                    <div class="diseña__colores--colores9" />
                  </li>
                </ul>
              </div>
              <div class="diseña__colores collapsible__content">
                <h3 class="diseña__coloresfuentes uppercase">Fuentes</h3>
                <ul class="listadiseño">
                  <li class="diseña__colores--option-fuentes diseña--texto1">
                    <input
                      id="ubuntu"
                      type="radio"
                      class="diseña--radio diseña--fuentes"
                      name="elecciónText"
                    />Ubuntu
                  </li>
                  <li class="diseña__colores--option-fuentes diseña--texto2">
                    <input
                      id="comicsans"
                      type="radio"
                      class="diseña--radio diseña--fuentes"
                      name="elecciónText"
                    />Comic Sans
                  </li>
                  <li class="diseña__colores--option-fuentes diseña--texto3">
                    <input
                      id="montserrat"
                      type="radio"
                      class="diseña--radio diseña--fuentes"
                      name="elecciónText"
                    />Montserrat
                  </li>
                </ul>
              </div>
            </fieldset>
            {/* <!-- Rellena --> */}
            <fieldset class="fieldset__rellena div__rellena collapsible fieldset--invisible">
              <div class="fieldset__container--title">
                <span class="fieldset__rellena--keyboard">
                  <i class="far fa-keyboard" />
                  <h2 class="fieldset__title">Rellena</h2>
                </span>
                <span class="fieldset__rellena--arrow collapsible__label">
                  <i class="fas fa-angle-up rotate" />
                </span>
              </div>
              <div class="collapsible__content div__editor--inner">
                <div class="formulario">
                  <label class="fieldset__rellena--label" for="editor-name">
                    Nombre completo
                  </label>
                  <input
                    class="fieldset__rellena--input fieldset--name"
                    type="text"
                    name="editor-name"
                    id="editor-name"
                    placeholder="Ej: Sally Jill"
                    data-donde="element-name"
                  />
                </div>
                <div class="">
                  <label class="fieldset__rellena--label" for="editor-role">
                    Puesto
                  </label>
                  <input
                    class="fieldset__rellena--input fieldset--role"
                    type="text"
                    name="editor-role"
                    id="editor-role"
                    placeholder="Ej: Front-end unicorn"
                    data-donde="element-role"
                  />
                </div>
                <div class="">
                  <label class="fieldset__rellena--label" for="imagen">
                    Imagen de perfil
                  </label>
                  <div class="div__imagen">
                    <div class="añadir">
                      <button class="añadir__upload-btn">Añadir imagen</button>
                      <input
                        type="file"
                        name=""
                        id="img-selector"
                        class="añadir__hiddenField"
                      />
                    </div>
                    <div class="mini" />
                  </div>
                </div>
                <div class="contact">
                  <div class="">
                    <label class="fieldset__rellena--label" for="email">
                      Email
                    </label>
                    <input
                      class="fieldset__rellena--input fieldset__rellena--input-email"
                      type="email"
                      name="email"
                      placeholder="Ej: sally-hill@gmail.com"
                      autocomplete="email"
                    />
                  </div>
                  <div class="">
                    <label class="fieldset__rellena--label" for="telefono">
                      Teléfono
                    </label>
                    <input
                      class="fieldset__rellena--input fieldset__rellena--input-mobile"
                      type="phone"
                      name="telefono"
                      placeholder="Ej: +34 555-55-55-55"
                      autocomplete="tel-national"
                    />
                  </div>
                  <div class="">
                    <label class="fieldset__rellena--label" for="linkedin">
                      Linkedin
                    </label>
                    <input
                      class="fieldset__rellena--input fieldset__rellena--input-linkedin"
                      type="text"
                      name="linkedin"
                      placeholder="Ej: linkedin.com/in/Sally.hill"
                    />
                  </div>
                  <div class="">
                    <label class="fieldset__rellena--label" for="github">
                      Github
                    </label>
                    <input
                      class="fieldset__rellena--input fieldset__rellena--input-github"
                      type="text"
                      name="github"
                      placeholder="Ej: sally-hill"
                    />
                  </div>
                </div>
                <div class="">
                  <label
                    class="fieldset__rellena--label label__habilidades"
                    for="habilidades"
                  >
                    Habilidades (máximo 3)
                  </label>
                  <div class="fieldset__div--habilidades">
                    <div class="div__habilidades">
                      <select class="select__habilidades select__habilidades1" />
                      <div class="button__add-select--container">
                        <i class="fas fa-plus button__add-select button__add-select1" />
                      </div>
                    </div>
                  </div>
                  <div class="fieldset__div--habilidades-new" />
                </div>
              </div>
            </fieldset>

            {/* <!-- Rellena -->
        <!-- Comparte --> */}

            <fieldset class="div__rellena collapsible fieldset__rellena fieldset--invisible">
              <div class="fieldset__container--title">
                <span class="fieldset__rellena--keyboard">
                  <i class="fas fa-share-alt" />
                  <h2 class="fieldset__title">Comparte</h2>
                </span>
                <span class="fieldset__rellena--arrow collapsible__label">
                  <i class="fas fa-angle-up rotate" />
                </span>
              </div>
              <div class="collapsible__content div__editor--inner">
                <div class="fieldset__share--button">
                  <button
                    id="submit"
                    type="button"
                    class="fieldset__share--button"
                  >
                    <span class="fieldset__share--button--icon">
                      <i class="far fa-address-card" />
                    </span>
                    <span class="fieldset__share--button--text uppercase">
                      Crear tarjeta
                    </span>
                  </button>
                </div>
              </div>
            </fieldset>
          </section>
        </main>
        <footer class="footer">
          <p class="footer__copyright">Awesome profile-cards ©2018</p>
          <a href="http://www.adalab.es" target="_Blank">
            <img
              class="footer__logo--adalab"
              src={logoAda}
              alt="Logotipo de Adalab"
            />
          </a>
        </footer>
      </div>
    );
  }
}

export default App;
