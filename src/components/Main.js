import React from "react";
import Form from "./Form";
import Visor from "./Visor";

class Main extends React.Component {
  constructor(props){
    super(props);
    this.state={
      name:'Nombre completo',
      job:'Descripción',
      mail:'',
      phone:'',
      linkedin:'',
      github:''
    };
    this.actualizarName=this.actualizarName.bind(this);
    this.actualizarJob=this.actualizarJob.bind(this);
    this.actualizarMail=this.actualizarMail.bind(this);
    this.actualizarPhone=this.actualizarPhone.bind(this);
    this.actualizarLinkedin=this.actualizarLinkedin.bind(this);
    this.actualizarGithub=this.actualizarGithub.bind(this);
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
  actualizarMail(e){
    this.setState({
      mail: e.target.value
    })
  }
  actualizarPhone(e){
    this.setState({
      phone: e.target.value
    })
  }
  actualizarLinkedin(e){
    this.setState({
      linkedin: e.target.value
    })
  }
  actualizarGithub(e){
    this.setState({
      github: e.target.value
    })
  }
  render() {
    return (
      <div className="container__main">
        <main className="page__main">
          <section className="visor">
            <Visor name={this.state.name} job={this.state.job} mail={this.state.mail} phone={this.state.phone} linkedin={this.state.linkedin} github={this.state.github} />
          </section>
          <Form funcionfoto={this.props.funcionfoto} foto={this.props.foto} handlerGithub={this.actualizarGithub} handlerLinkedin={this.actualizarLinkedin} handlerPhone={this.actualizarPhone} handlerMail={this.actualizarMail} handlerName={this.actualizarName} handlerJob={this.actualizarJob} title={this.props.titulo} skills={this.props.skills} />
        </main>
      </div>
    );
  }
}

export default Main;
