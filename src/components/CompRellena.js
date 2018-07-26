import React from 'react';

class CompRellena extends React.Component {
  render(){
    return (
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
                <button className="añadir__upload-btn">Añadir imagen</button>
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
      );
    }
  }

  export default CompRellena;
