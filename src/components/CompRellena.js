import React from 'react';
const fr= new FileReader();
class CompRellena extends React.Component {
  constructor(props){
    super(props);
    this.clickSimulado=this.clickSimulado.bind(this);
    this.clickCargarFoto=this.clickCargarFoto.bind(this);
    this.cambiarsrc2=this.cambiarsrc2.bind(this);
    this.fileInput = React.createRef();
  }
  clickSimulado(){
    document.querySelector('#img-selector').click();

  }
  clickCargarFoto(){


    fr.addEventListener('load',this.cambiarsrc2);
    fr.readAsDataURL(this.fileInput.current.files[0])
    //this.props.funcionfoto(fr.result);
  }

  cambiarsrc2(){
    const url=fr.result;
    this.props.funcionfoto(url);

  }
  render(){
    return (
      <fieldset className="fieldset__rellena div__rellena collapsible fieldset--invisible">
        <div className="fieldset__container--title">
          <span className="fieldset__rellena--keyboard">
            <i className="far fa-keyboard" />
            <h2 className="fieldset__title">{this.props.tituloRellena}</h2>
          </span>
          <span className="fieldset__rellena--arrow collapsible__label">
            <i className="fas fa-angle-up rotate" />
          </span>
        </div>
        <div className=" div__editor--inner">{/* collapsible__content */}
        <div className="formulario">
          <label className="fieldset__rellena--label" htmlFor="editor-name">
            Nombre completo
          </label>
          <input
            className="fieldset__rellena--input fieldset--name"
            type="text"
            name="editor-name"
            id="editor-name"
            placeholder={this.props.placeholders.nombre}
            data-donde="element-name"
            onKeyUp={this.props.handlerName}
            defaulvalue={this.props.visor.name}
          />
        </div>
        <div className="">
          <label className="fieldset__rellena--label" htmlFor="editor-role">
            Puesto
          </label>
          <input
            className="fieldset__rellena--input fieldset--role"
            type="text"
            name="editor-role"
            id="editor-role"
            placeholder={this.props.placeholders.descripcion}
            data-donde="element-role"
            onKeyUp={this.props.handlerJob}
            defaulvalue={this.props.visor.job}
          />
        </div>
        <div className="">
          <label className="fieldset__rellena--label" htmlFor="imagen">
            Imagen de perfil
          </label>
          <div className="div__imagen">
            <div className="añadir">
              <input
                ref={this.fileInput}
                type="file"
                name=""
                id="img-selector"
                className="añadir__hiddenField"
                onChange={this.clickCargarFoto}
              />
              <input onClick={this.clickSimulado} type="button" value="Cargar foto" className="añadir__upload-btn" />

            </div>
            <div className="mini" style={{backgroundImage:'url(' + this.props.foto + ')'}}></div>


          </div>
        </div>
        <div className="contact">
          <div className="">
            <label className="fieldset__rellena--label" htmlFor="email">
              Email
            </label>
            <input
              className="fieldset__rellena--input fieldset__rellena--input-email"
              type="email"
              name="email"
              placeholder={this.props.placeholders.email}
              autoComplete="email"
              onKeyUp={this.props.handlerMail}
              defaulvalue={this.props.visor.mail}
            />
          </div>
          <div className="">
            <label className="fieldset__rellena--label" htmlFor="telefono">
              Teléfono
            </label>
            <input
              className="fieldset__rellena--input fieldset__rellena--input-mobile"
              type="phone"
              name="telefono"
              placeholder={this.props.placeholders.telefono}
              autoComplete="tel-national"
              onKeyUp={this.props.handlerPhone}
              defaulvalue={this.props.visor.phone}
            />
          </div>
          <div className="">
            <label className="fieldset__rellena--label" htmlFor="linkedin">
              Linkedin
            </label>
            <input
              className="fieldset__rellena--input fieldset__rellena--input-linkedin"
              type="text"
              name="linkedin"
              placeholder={this.props.placeholders.linkedin}
              onKeyUp={this.props.handlerLinkedin}
              defaulvalue={this.props.visor.linkedin}
            />
          </div>
          <div className="">
            <label className="fieldset__rellena--label" htmlFor="github">
              Github
            </label>
            <input
              className="fieldset__rellena--input fieldset__rellena--input-github"
              type="text"
              name="github"
              placeholder={this.props.placeholders.github}
              onKeyUp={this.props.handlerGithub}
              defaulvalue={this.props.visor.github}
            />
          </div>
        </div>
        <div className="">
          <label
            className="fieldset__rellena--label label__habilidades"
            htmlFor="habilidades"
            >
              Habilidades (máximo 3)
            </label>
            <div className="fieldset__div--habilidades">
              <div className="div__habilidades">
                <select className="select__habilidades select__habilidades1">
                  {this.props.sect.map(function(item){
                    return (
                      <option key={item}>{item}</option>
                    )
                  })}
                </select>
                {/* <div className="button__add-select--container">
                <i className="fas fa-plus button__add-select button__add-select1" /> */}
              </div>
            </div>
          </div>
          <div className="fieldset__div--habilidades-new" />
        </div>
        {/* </div> */}
      </fieldset>
    );
  }
}

export default CompRellena;
