import React, { Component } from "react";
import Pag from "./components/Pag";
import image from "./images/awesomecards.svg";

class App extends Component {
  constructor(props) {
    super(props);

    this.logoAwesome = image;
  }
  render() {
    return (
      <div className="App">
        <Pag logoAwe={this.logoAwesome.image} />
      </div>
    );
  }
}

export default App;
