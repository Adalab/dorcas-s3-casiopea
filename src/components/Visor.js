import React from "react";
import "../styles/main.css";

class Visor extends React.Component {
  renderMail(mail) {
    if(mail !== ''){
      const hrefMail = "mailto:" + mail;
    return (
        <div className="card__foot--icon email">
          <a href={hrefMail} className="emailLink">
            <i className="iconsocial far fa-envelope" />
          </a>
        </div>
    );
  }
  }
  renderPhone(phone){
    if(phone!==""){
      const hrefTel = "mailto:" + phone;
      return(
        <div className="card__foot--icon mobile">
          <a href={hrefTel} className="mobileLink">
            <i className="iconsocial fas fa-mobile-alt" />
          </a>
        </div>
      );
    }
  }
  renderLinkedin(linkedin){
    if(linkedin!==""){
      const hrefLinkedin = "https://linkedin.com/in/" + linkedin;
      return(
        <div className="card__foot--icon linkedin">
          <a href={hrefLinkedin} className="linkedinLink">
            <i className="iconsocial fab fa-linkedin-in" />
          </a>
        </div>
      );
    }
  }
  renderGithub(github){
    if(github!==""){
      const hrefGithub = "https://github.com/" + github;
      return(
        <div className="card__foot--icon github">
          <a href={hrefGithub} className="githubLink">
            <i className="iconsocial fab fa-github-alt" />
          </a>
        </div>
      )
    }
  }
  render() {
    return (
      <div className="container__visor">
        <section className="visor">
          <button className="reset" onClick={this.props.reset} >
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
            <div className="card__pic" style={{backgroundImage:'url(' + this.props.visor.photo + ')'}} >
            </div>

            <div className="card__foot">
              <div className="card__foot--social">
                {this.renderPhone(this.props.visor.phone)}
                {this.renderMail(this.props.visor.mail)}
                {this.renderLinkedin(this.props.visor.linkedin)}
                {this.renderGithub(this.props.visor.github)}
              </div>
              <div className="card__foot--skills" />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Visor;
