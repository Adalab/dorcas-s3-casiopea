import React from 'react';
import "../styles/main.css";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";

class Pag extends React.Component {
  render(){
    return (
      <div className="container__all">
        <Header />
        <Main titulo={this.props.titulos}/>
        <Footer copy={this.props.copyright} img={this.props.image} href={this.props.href}/>
      </div>
    );
  }
}

export default Pag;
