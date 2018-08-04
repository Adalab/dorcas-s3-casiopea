import React from "react";
import Form from "./Form";
import Visor from "./Visor";

class Main extends React.Component {
  render() {
    return (
      <div className="container__main">
        <main className="page__main">
          <section className="visor">
            <button className="reset">
              <div className="reset__icon">
                <i className="far fa-trash-alt" />
              </div>
              <p className="reset__text">RESET</p>
            </button>
            <div className="card">
              <div className="card__head">
                <div className="card__head--border">
                  <div className="card__head--container">
                    <div className="card__name">
                      <p className="card__name--name" id="element-name">
                        {this.props.visor.name}
                      </p>
                      <div className="card__job">
                        <p className="card__job--job" id="element-role">
                          {this.props.visor.job}

                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card__pic" />

              <div className="card__foot">
                <div className="card__foot--social">
                  <div className="card__foot--icon mobile">
                    <a href="" className="mobileLink">
                      <i className="iconsocial fas fa-mobile-alt" />
                    </a>
                  </div>
                  <div className="card__foot--icon email">
                    <a href="" className="emailLink">
                      <i className="iconsocial far fa-envelope" />
                    </a>
                  </div>
                  <div className="card__foot--icon linkedin">
                    <a href="" className="linkedinLink">
                      <i className="iconsocial fab fa-linkedin-in" />
                    </a>
                  </div>
                  <div className="card__foot--icon github">
                    <a href="" className="githubLink">
                      <i className="iconsocial fab fa-github-alt" />
                    </a>
                  </div>
                </div>
                <div className="card__foot--skills" />
              </div>
            </div>
          </section>
          <Form title={this.props.titulo} skills={this.props.skills} />
        </main>
      </div>
    );
  }
}

export default Main;
