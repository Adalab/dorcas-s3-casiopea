import React, { Component } from "react";
import Pag from "./components/Pag";
import logoAda from "./images/logo-adalab-80px.png";
import logoAwesome from "./images/awesomecards.svg";
import { Link, Switch, Route} from 'react-router-dom';
import PagInicio from "./components/PagInicio";
import foto from './images/pollito.png';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      json:{
        "palette": 1,
        "typography": 2,
        name: "Nombre Apellido",
        job: "Descripción",
        phone: "",
        mail:"",
        linkedin: "",
        github: "",
        "photo": foto,
        "skills": []
      },
      placeholders:{
        nombre:"Ej: Sally Jill",
        descripcion:"Ej: Front-end unicorn",
        email:"Ej: sally-hill@gmail.com",
        telefono:"Ej: +34 555-55-55-55",
        linkedin:"Ej: linkedin.com/in/Sally.hill",
        github:"Ej: sally-hill"
      },
      footer: {
        texto: "Awesome profile-cards ©2018",
        image: logoAda,
        href: "http://www.adalab.es"
      },
      form: {
        titulos: {
          nombreDisena: "Diseña",
          nombreRellena: "Rellena",
          nombreComparte: "Comparte"
        }
      },
      skills: []
    };
    this.actualizarName=this.actualizarName.bind(this);
    this.actualizarJob=this.actualizarJob.bind(this);
    this.actualizarMail=this.actualizarMail.bind(this);
    this.actualizarPhone=this.actualizarPhone.bind(this);
    this.actualizarLinkedin=this.actualizarLinkedin.bind(this);
    this.actualizarGithub=this.actualizarGithub.bind(this);
    this.changePalette=this.changePalette.bind(this);
    this.changeTypography=this.changeTypography.bind(this);
    this.cambiarsrc=this.cambiarsrc.bind(this);
    this.reset=this.reset.bind(this);
  }

  componentDidMount () {
    this.callApi();
    this.LocalStorage();
  }
  LocalStorage() {
    if (localStorage.getItem('localStorage')) {
      const stateStorage = JSON.parse(localStorage.getItem('localStorage'));
      const json = stateStorage;
      this.setState({
        json: json
      })
    }
  }
  saveStorage(){
    localStorage.setItem("localStorage", JSON.stringify(this.state.json));
  }

  cambiarsrc(rutafoto){

    this.setState ((prevState) => {
      const j = {
        ...this.state.json,
        photo: rutafoto
      }

    return (
      {json: j}
    )
  });
  this.saveStorage();
  }
  actualizarName(e){
    const target = e.target;
    this.setState((prevState)=>{
      const a = Object.assign({}, this.state.json, {name: target.value});
    return (
      {json: a}
    )
  });
  this.saveStorage();
  }
  actualizarJob(e){
    const target = e.target;
    this.setState((prevState)=>{
      const a = Object.assign({}, this.state.json, {job: target.value});
    return (
      {json: a}
    )
  });
  this.saveStorage();
  }
  actualizarMail(e){
    const target = e.target;
    this.setState((prevState)=>{
      const a = Object.assign({}, this.state.json, {mail: target.value});
    return (
      {json: a
    })
  });
  this.saveStorage();
  }
  actualizarPhone(e){
    const target = e.target;
    this.setState((prevState)=>{
      const a = Object.assign({}, this.state.json, {phone: target.value});
    return (
      {json: a}
    )
  });
  this.saveStorage();
  }
  actualizarLinkedin(e){
    const target = e.target;
    this.setState((prevState)=>{
      const a = Object.assign({}, this.state.json, {linkedin: target.value});
    return (
      {json: a}
    )
  });
  this.saveStorage();
  }
  actualizarGithub(e){
    const target = e.target;
    this.setState((prevState)=>{
      const a = Object.assign({}, this.state.json, {github: target.value});
    return (
      {json: a}
    )
  });
  this.saveStorage();
  }
  callApi() {
    fetch(
      "https://raw.githubusercontent.com/Adalab/dorcas-s2-proyecto-data/master/skills.json"
    )
    .then(function(response) {
      return response.json();
    })
    .then(json => {
      const habilidades = json.skills;
      this.setState({
        skills: habilidades
      });
    });
    this.saveStorage();
  }

  changePalette (e) {
   const target = e.target;
   this.setState ((prevState) => {
     const j = {
       ...this.state.json,
       palette: target.value
     }

   return (
     {json: j}
   )
 });
 this.saveStorage();
 }

 changeTypography (e) {
  const target = e.target;
  this.setState ((prevState) => {
    const j = {
      ...this.state.json,
      typography: target.value
    }

  return (
    {json: j}
  )
});
this.saveStorage();
}

  reset (){
    this.setState({
      json:{
        "palette": 1,
        "typography": 2,
        "name" : "Nombre Apellido",
        "job": "Descripción",
        "phone": "",
        "mail": "",
        "linkedin": "",
        "github": "",
        "photo": foto,
        "skills": []
      }

    })
    localStorage.clear();
  }



  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component = { PagInicio} />
          <Route path ='/Pag' render = {() =>
            <Pag
                    funcionfoto={this.cambiarsrc}
                    foto={this.state.json.photo}
                    visor={this.state.json}
                    copyright={this.state.footer.texto}
                    image={this.state.footer.image}
                    href={this.state.footer.href}
                    titulos={this.state.form.titulos}
                    seleccion={this.state.skills}
                    logoAwe={logoAwesome}
                    reset={this.reset}
                    handlerGithub={this.actualizarGithub}
                    handlerLinkedin={this.actualizarLinkedin}
                    handlerPhone={this.actualizarPhone}
                    handlerMail={this.actualizarMail}
                    handlerName={this.actualizarName}
                    handlerJob={this.actualizarJob}
                    changePalette={this.changePalette}
                    changeTypography={this.changeTypography}
                    placeholders={this.state.placeholders}
                  />}
                />
        </Switch>
      </div>
    );
  }
}

export default App;
