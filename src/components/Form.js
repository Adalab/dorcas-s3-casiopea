import React from 'react';
import CompDisena from './CompDisena';
import CompRellena from './CompRellena';
import CompComparte from './CompComparte';
class Form extends React.Component {
  render(){
    return (
          <section className="editor">
            <CompDisena />
            <CompRellena />
            <CompComparte />
          </section>
    );
  }
}

export default Form;
