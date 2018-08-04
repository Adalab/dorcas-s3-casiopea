import React from "react";

// Crear enlace
function sendRequest(userForm){
    fetch('https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/', {
      method: 'POST',
      body: JSON.stringify(userForm),
      headers: {
        'content-type': 'application/json'
      },
    })
      .then(function(resp) { return resp.json(); })
      .then(function(result) { showURL(result); })
      .catch(function(error) { console.log(error); });
  }
  function showURL(result){
    if(result.success){
      responseURL.innerHTML = '<a href=' + result.cardURL + '>' + result.cardURL + '</a>';
    }else{
      responseURL.innerHTML = 'ERROR:' + result.error;
    }
  }
  //BOTON TWITTER
  var twitterShare = document.querySelector('.fieldset__share--button-twitter');
  
  twitterShare.onclick = function(e) {
    var linkTwitter = document.querySelector('.fieldset__share--link  a').href;
    e.preventDefault();
    var twitterWindow = window.open('https://twitter.com/share?url=' + linkTwitter, 'twitter-popup', 'height=350,width=600','590','253');
    if(twitterWindow.focus) { twitterWindow.focus(); }
    return false;
  };

class CreateCard extends React.Component {
  render() {
    return (
      <div className="container__all">
        <Header img={this.props.logoAwe} />
        <Main visor={this.props.visor} titulo={this.props.titulos} skills={this.props.seleccion} />
        <Footer
          copy={this.props.copyright}
          img={this.props.image}
          href={this.props.href}
        />
      </div>
    );
  }
}

export default CreateCard;
