import React from "react";
import Visor from "./Visor";

class Main extends React.Component {
  render() {
    return (
      <div className="container__main">
        <main className="page__main">
          <Visor />
          <section className="editor">
            <fieldset className="fieldset__rellena div__rellena collapsible">
              <div className="fieldset__container--title">
                <span className="fieldset__rellena--keyboard">
                  <i className="far fa-object-ungroup" />
                  <h2 className="fieldset__title">Diseña</h2>
                </span>
                <span className="fieldset__rellena--arrow collapsible__label">
                  <i className="fas fa-angle-up rotate" />
                </span>
              </div>
              <div className="diseña__colores collapsible__content">
                <h3 className="diseña__coloresfuentes uppercase">Colores</h3>
                <ul className="listadiseño">
                  <li className="diseña__colores--option">
                    <input
                      id="azul"
                      type="radio"
                      className="diseña__colores--paleta diseña--radio"
                      name="elección"
                    />
                    <div className="diseña__colores--colores1" />
                    <div className="diseña__colores--colores2" />
                    <div className="diseña__colores--colores3" />
                  </li>
                  <li className="diseña__colores--option">
                    <input
                      id="rojo"
                      type="radio"
                      className="diseña__colores--paleta diseña--radio"
                      name="elección"
                    />
                    <div className="diseña__colores--colores4" />
                    <div className="diseña__colores--colores5" />
                    <div className="diseña__colores--colores6" />
                  </li>
                  <li className="diseña__colores--option">
                    <input
                      id="gris"
                      type="radio"
                      className="diseña__colores--paleta diseña--radio"
                      name="elección"
                    />
                    <div className="diseña__colores--colores7" />
                    <div className="diseña__colores--colores8" />
                    <div className="diseña__colores--colores9" />
                  </li>
                </ul>
              </div>
              <div className="diseña__colores collapsible__content">
                <h3 className="diseña__coloresfuentes uppercase">Fuentes</h3>
                <ul className="listadiseño">
                  <li className="diseña__colores--option-fuentes diseña--texto1">
                    <input
                      id="ubuntu"
                      type="radio"
                      className="diseña--radio diseña--fuentes"
                      name="elecciónText"
                    />Ubuntu
                  </li>
                  <li className="diseña__colores--option-fuentes diseña--texto2">
                    <input
                      id="comicsans"
                      type="radio"
                      className="diseña--radio diseña--fuentes"
                      name="elecciónText"
                    />Comic Sans
                  </li>
                  <li className="diseña__colores--option-fuentes diseña--texto3">
                    <input
                      id="montserrat"
                      type="radio"
                      className="diseña--radio diseña--fuentes"
                      name="elecciónText"
                    />Montserrat
                  </li>
                </ul>
              </div>
            </fieldset>
            {/* <!-- Rellena --> */}
            <fieldset className="fieldset__rellena div__rellena collapsible fieldset--invisible">
              <div className="fieldset__container--title">
                <span className="fieldset__rellena--keyboard">
                  <i className="far fa-keyboard" />
                  <h2 className="fieldset__title">Rellena</h2>
                </span>
                <span className="fieldset__rellena--arrow collapsible__label">
                  <i className="fas fa-angle-up rotate" />
                </span>
              </div>
              <div className="collapsible__content div__editor--inner">
                <div className="formulario">
                  <label className="fieldset__rellena--label" for="editor-name">
                    Nombre completo
                  </label>
                  <input
                    className="fieldset__rellena--input fieldset--name"
                    type="text"
                    name="editor-name"
                    id="editor-name"
                    placeholder="Ej: Sally Jill"
                    data-donde="element-name"
                  />
                </div>
                <div className="">
                  <label className="fieldset__rellena--label" for="editor-role">
                    Puesto
                  </label>
                  <input
                    className="fieldset__rellena--input fieldset--role"
                    type="text"
                    name="editor-role"
                    id="editor-role"
                    placeholder="Ej: Front-end unicorn"
                    data-donde="element-role"
                  />
                </div>
                <div className="">
                  <label className="fieldset__rellena--label" for="imagen">
                    Imagen de perfil
                  </label>
                  <div className="div__imagen">
                    <div className="añadir">
                      <button className="añadir__upload-btn">
                        Añadir imagen
                      </button>
                      <input
                        type="file"
                        name=""
                        id="img-selector"
                        className="añadir__hiddenField"
                      />
                    </div>
                    <div className="mini" />
                  </div>
                </div>
                <div className="contact">
                  <div className="">
                    <label className="fieldset__rellena--label" for="email">
                      Email
                    </label>
                    <input
                      className="fieldset__rellena--input fieldset__rellena--input-email"
                      type="email"
                      name="email"
                      placeholder="Ej: sally-hill@gmail.com"
                      autocomplete="email"
                    />
                  </div>
                  <div className="">
                    <label className="fieldset__rellena--label" for="telefono">
                      Teléfono
                    </label>
                    <input
                      className="fieldset__rellena--input fieldset__rellena--input-mobile"
                      type="phone"
                      name="telefono"
                      placeholder="Ej: +34 555-55-55-55"
                      autocomplete="tel-national"
                    />
                  </div>
                  <div className="">
                    <label className="fieldset__rellena--label" for="linkedin">
                      Linkedin
                    </label>
                    <input
                      className="fieldset__rellena--input fieldset__rellena--input-linkedin"
                      type="text"
                      name="linkedin"
                      placeholder="Ej: linkedin.com/in/Sally.hill"
                    />
                  </div>
                  <div className="">
                    <label className="fieldset__rellena--label" for="github">
                      Github
                    </label>
                    <input
                      className="fieldset__rellena--input fieldset__rellena--input-github"
                      type="text"
                      name="github"
                      placeholder="Ej: sally-hill"
                    />
                  </div>
                </div>
                <div className="">
                  <label
                    className="fieldset__rellena--label label__habilidades"
                    for="habilidades"
                  >
                    Habilidades (máximo 3)
                  </label>
                  <div className="fieldset__div--habilidades">
                    <div className="div__habilidades">
                      <select className="select__habilidades select__habilidades1" />
                      <div className="button__add-select--container">
                        <i className="fas fa-plus button__add-select button__add-select1" />
                      </div>
                    </div>
                  </div>
                  <div className="fieldset__div--habilidades-new" />
                </div>
              </div>
            </fieldset>

            {/* <!-- Rellena -->
                <!-- Comparte --> */}

            <fieldset className="div__rellena collapsible fieldset__rellena fieldset--invisible">
              <div className="fieldset__container--title">
                <span className="fieldset__rellena--keyboard">
                  <i className="fas fa-share-alt" />
                  <h2 className="fieldset__title">Comparte</h2>
                </span>
                <span className="fieldset__rellena--arrow collapsible__label">
                  <i className="fas fa-angle-up rotate" />
                </span>
              </div>
              <div className="collapsible__content div__editor--inner">
                <div className="fieldset__share--button">
                  <button
                    id="submit"
                    type="button"
                    className="fieldset__share--button"
                  >
                    <span className="fieldset__share--button--icon">
                      <i className="far fa-address-card" />
                    </span>
                    <span className="fieldset__share--button--text uppercase">
                      Crear tarjeta
                    </span>
                  </button>
                </div>
              </div>
            </fieldset>
          </section>
        </main>
      </div>
    );
  }
}

export default Main;
