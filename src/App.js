import React, { Component } from "react";
import Pag from "./components/Pag";
import logoAda from "./images/logo-adalab-80px.png";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
      skills: {
        habilidades: {
          skillHTML: "HTML",
          skillCSS: "CSS",
          skillJavaScript: "JavaScript",
          skillReact: "React"
        }
      }
    };

  }


  render() {
    return (
      <div className="App">

        <Pag
          copyright={this.state.footer.texto}
          image={this.state.footer.image}
          href={this.state.footer.href}
          titulos={this.state.form.titulos}
          seleccion={this.state.skills.habilidades}
        />
      </div>
    );
  }
}

export default App;
