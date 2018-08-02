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
        <Main />
        <Footer />
      </div>
    );
  }
}

export default Pag;
