import React, { Component } from "react";
import Pag from "./components/Pag";
import logoAda from "./images/logo-adalab-80px.png";
import logoAwesome from "./images/awesomecards.svg";
import { Link, Switch, Route} from 'react-router-dom';
import PagInicio from "./components/PagInicio";

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
        "email": "",
        "linkedin": "",
        "github": "",
        "photo": "",
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
    this.callApi();
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

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component = { PagInicio} />
          <Route path ='/Pag' render = {() =>
            <Pag
                    visor={this.state.json}
                    copyright={this.state.footer.texto}
                    image={this.state.footer.image}
                    href={this.state.footer.href}
                    titulos={this.state.form.titulos}
                    seleccion={this.state.skills}
                    logoAwe={logoAwesome}
                  />}
                />
        </Switch>
      </div>
    );
  }
}

export default App;
