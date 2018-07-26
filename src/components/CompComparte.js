import React from 'react';

class CompComparte extends React.Component {
  render(){
    return (
      <fieldset className="div__rellena collapsible fieldset__rellena fieldset--invisible">
        <div className="fieldset__container--title">
          <span className="fieldset__rellena--keyboard">
            <i className="fas fa-share-alt" />
            <h2 className="fieldset__title">Comparte</h2>
          </span>
          <span className="fieldset__rellena--arrow collapsible__label">
            <i className="fas fa-angle-up rotate" />
          </span>
        </div>
        <div className="collapsible__content div__editor--inner">
          <div className="fieldset__share--button">
            <button
              id="submit"
              type="button"
              className="fieldset__share--button"
              >
                <span className="fieldset__share--button--icon">
                  <i className="far fa-address-card" />
                </span>
                <span className="fieldset__share--button--text uppercase">
                  Crear tarjeta
                </span>
              </button>
            </div>
          </div>
        </fieldset>
    );
  }
}

export default CompComparte;
