import React from 'react';
import CompDisena from './CompDisena';
import CompRellena from './CompRellena';
import CompComparte from './CompComparte';
class Form extends React.Component {
  render(){
    return (
          <section className="editor">
            <CompDisena tituloDisena={this.props.title[0]}/>
            <CompRellena />
            <CompComparte />
          </section>
    );
  }
}

export default Form;
