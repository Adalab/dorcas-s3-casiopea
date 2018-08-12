import React from 'react';

class CompComparte extends React.Component {
  constructor(props) {
    super(props);

    this.handleCreateButton = this.handleCreateButton.bind(this);
    this.handleShareButton = this.handleShareButton.bind(this);
  }

  handleCreateButton() {
    console.log('tarjeta creada');
  }

  handleShareButton() {
    console.log('comparte tarjeta');
  }


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
        <div className=" div__editor--inner">{/* collapsible__content */}
          <div className="fieldset__share--button">
            <button
              id="submit"
              type="button"
              className="fieldset__share--button"
              onClick={this.handleCreateButton} 
              >
                <span className="fieldset__share--button--icon">
                  <i className="far fa-address-card" />
                </span>
                <span className="fieldset__share--button--text uppercase">
                  Crear tarjeta
                </span>
              </button>
            </div>


{/* // {this.props.finalCardToShare.cardURL !== undefined && (
//   <section className="shares collapsible__content">
//     <p className="shares__text">La tarjeta ha sido creada:</p>

//     <a href={this.props.finalCardToShare.cardURL}>
//       <iframe className="result__iframe" src={this.props.finalCardToShare.cardURL}></iframe>
//     </a> */}




            <div className="fieldset__share--created">
              <p>La tarjeta ha sido creada:</p>
              <p className="fieldset__share--link"></p>
              <button type="button" name="button" className="fieldset__share--button-twitter"
              onClick={this.handleShareButton} >
                <i className="fab fa-twitter"></i> Compartir en Twitter
              </button>
            </div>
          </div>
          
        </fieldset>
    );
  }
}

export default CompComparte;

// // Crear enlace
// sendRequest(userForm){
//   fetch('https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/', {
//     method: 'POST',
//     body: JSON.stringify(userForm),
//     headers: {
//       'content-type': 'application/json'
//     },
//   })
//     .then(function(resp) { return resp.json(); })
//     .then(function(result) { showURL(result); })
//     .catch(function(error) { console.log(error); });
// }
// showURL(result){
//   if(result.success){
//     responseURL.innerHTML = '<a href=' + result.cardURL + '>' + result.cardURL + '</a>';
//   }else{
//     responseURL.innerHTML = 'ERROR:' + result.error;
//   }
// }
// //BOTON TWITTER
// var twitterShare = document.querySelector('.container__comparte--button-twitter');

// twitterShare.onclick = function(e) {
//   var linkTwitter = document.querySelector('.container__comparte-link  a').href;
//   e.preventDefault();
//   var twitterWindow = window.open('https://twitter.com/share?url=' + linkTwitter, 'twitter-popup', 'height=350,width=600','590','253');
//   if(twitterWindow.focus) { twitterWindow.focus(); }
//   return false;
// };
