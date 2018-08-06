import React from 'react';
import CompDisena from './CompDisena';
import CompRellena from './CompRellena';
import CompComparte from './CompComparte';
class Form extends React.Component {
  render(){
    return (
          <section className="editor">
            <CompDisena tituloDisena={this.props.title.nombreDisena}/>
            <CompRellena funcionfoto={this.props.funcionfoto} foto={this.props.foto} tituloRellena={this.props.title.nombreRellena} handlerMail={this.props.handlerMail} handlerLinkedin={this.props.handlerLinkedin} handlerGithub={this.props.handlerGithub} handlerPhone={this.props.handlerPhone} handlerName={this.props.handlerName} handlerJob={this.props.handlerJob}  sect={this.props.skills}/>
            <CompComparte tituloComparte={this.props.title.nombreComparte} />
          </section>
    );
  }
}

export default Form;
