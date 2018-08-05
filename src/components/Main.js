import React from "react";
import Form from "./Form";
import Visor from "./Visor";

class Main extends React.Component {
  constructor(props){
    super(props);
    this.state={
      name:'Nombre completo',
      job:'Descripción',
      phone:'',
      linkedin:'',
      github:''
    };
    this.actualizarName=this.actualizarName.bind(this);
    this.actualizarJob=this.actualizarJob.bind(this);
  }
  actualizarName(e){
    this.setState({
      name: e.target.value
    });
  }
  actualizarJob(e){
    this.setState({
      job: e.target.value
    })
  }
  render() {
    return (
      <div className="container__main">
        <main className="page__main">
          <section className="visor">
            <Visor name={this.state.name} job={this.state.job} />
          </section>
          <Form handlerName={this.actualizarName} handlerJob={this.actualizarJob} title={this.props.titulo} skills={this.props.skills} />
        </main>
      </div>
    );
  }
}

export default Main;
