import React from "react";
import Form from "./Form";
import Visor from "./Visor";

class Main extends React.Component {
  render() {
    return (
      <div className="container__main">
        <main className="page__main">
          <section className="visor">
<<<<<<< HEAD
            <Visor funcionfoto={this.props.funcionfoto}
              foto={this.props.foto}
              visor={this.props.visor}
              />
          </section>
          <Form funcionfoto={this.props.funcionfoto}
            foto={this.props.foto}
            handlerGithub={this.props.handlerGithub}
            handlerLinkedin={this.props.handlerLinkedin}
            handlerPhone={this.props.handlerPhone}
            handlerMail={this.props.handlerMail}
            handlerName={this.props.handlerName}
            handlerJob={this.props.handlerJob}
            title={this.props.titulo}
            skills={this.props.skills} />
=======
            <Visor funcionfoto={this.props.funcionfoto} foto={this.props.foto} name={this.state.name} job={this.state.job} mail={this.state.mail} phone={this.state.phone} linkedin={this.state.linkedin} github={this.state.github} />
          </section>
          <Form funcionfoto={this.props.funcionfoto} foto={this.props.foto} handlerGithub={this.actualizarGithub} handlerLinkedin={this.actualizarLinkedin} handlerPhone={this.actualizarPhone} handlerMail={this.actualizarMail} handlerName={this.actualizarName} handlerJob={this.actualizarJob} title={this.props.titulo} skills={this.props.skills} />
>>>>>>> ff9fe48478bd9b51a0d915c0f707ffae97a177fe
        </main>
      </div>
    );
  }
}

export default Main;
