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
        "name" : "Nombre Apellido",
        "job": "Descripción",
        "phone": "",
        "mail": "",
        "linkedin": "",
        "github": "",
        "photo": foto,
        "skills": []
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

    this.callApi = this.callApi.bind(this);
    this.cambiarsrc=this.cambiarsrc.bind(this);
    this.reset=this.reset.bind(this);
  }

  componentDidMount () {
    this.callApi();
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
                  />}
                />
        </Switch>
      </div>
    );
  }
}

export default App;
