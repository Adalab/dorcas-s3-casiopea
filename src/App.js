import React, { Component } from "react";
import Pag from './components/Pag';
import logoAda from './images/logo-adalab-80px.png';

class App extends Component {
  constructor(props){
    super(props);

    this.footer={
      texto:'Awesome profile-cards ©2018',
      image: logoAda,
      href: 'http://www.adalab.es'
    }
    this.form={
      titulos: ['Diseña', 'Rellena', 'Comparte']
    }
  }
  render() {
    return (
      <div className="App">
        <Pag copyright={this.footer.texto} image={this.footer.image} href={this.footer.href} titulos={this.form.titulos}/>
      </div>
    );
  }
}

export default App;
