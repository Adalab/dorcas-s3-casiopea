import React, { Component } from "react";
import Pag from './components/Pag';
import logoAda from './images/logo-adalab-80px.png';

class App extends Component {
  constructor(props){
    super(props);

    this.copyright={
      texto:'Awesome profile-cards ©2018',
      image: logoAda
    }
  }
  render() {
    return (
      <div className="App">
        <Pag copyright={this.copyright.texto} image={this.copyright.image} />
      </div>
    );
  }
}

export default App;
