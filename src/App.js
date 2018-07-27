import React, { Component } from "react";
import Pag from './components/Pag';
import logoAda from './images/logo-adalab-80px.png';

class App extends Component {
  constructor(props){
    super(props);

    this.copyright={
      texto:'Awesome profile-cards ©2018',
      image: logoAda,
      href: 'http://www.adalab.es'
    }
  }
  render() {
    return (
      <div className="App">
        <Pag copyright={this.copyright.texto} image={this.copyright.image} href={this.copyright.href}/>
      </div>
    );
  }
}

export default App;
