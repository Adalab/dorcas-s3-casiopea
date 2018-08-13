import React from "react";
import Form from "./Form";
import Visor from "./Visor";

class Main extends React.Component {
  render() {
    return (
      <div className="container__main">
        <main className="page__main">
          <section className="visor">
            <Visor
            funcionfoto={this.props.funcionfoto}
            visor={this.props.visor}
            reset={this.props.reset}/>
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
            skills={this.props.skills}
            changePalette={this.props.changePalette}
            visor={this.props.visor}
            changeTypography={this.props.changeTypography} />
        </main>
      </div>
    );
  }
}

export default Main;
