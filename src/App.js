import React, { Component } from "react";
import Pag from "./components/Pag";
import logoAwe from "./images/awesomecards.svg";

class App extends Component {
  constructor(props) {
    super(props);

    this.logoAwesome = logoAwe;
  }
  render() {
    return (
      <div className="App">
        <Pag logoAwe={this.logoAwesome} />
      </div>
    );
  }
}

export default App;
