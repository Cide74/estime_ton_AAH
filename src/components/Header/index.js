import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import Proptypes from "prop-types";

import "./style.scss";

const Header = ({ pseudo, pseudoWelcome, isLogged, onLogout }) => {
  const [identity, setIdentity] = useState("");
  const [iAmLog, setIAmLog] = useState(false);
  const [message, setMessage] = useState("");
  const login = useHistory();

  function getTheMoment() {
    const hour = new Date().getHours();
    if (hour >= 1 && hour < 17) {
      return "Bonjour";
    } else if (hour >= 17 && hour <= 23) {
      return "Bonne Soirée";
    }
  }

  const handleOnLogout = () => {
    // console.log("Je me déconnecte");
    setIdentity("");
    setMessage("");
    setIAmLog(false);
    localStorage.clear();
    onLogout();
  };

  const handleLogin = () => {
    // console.log("Je me redirige vers accueil");
    login.push("/login");
  };

  useEffect(() => {
    if (isLogged || localStorage.pseudo !== "") {
      setIdentity(pseudo);
      setMessage(pseudoWelcome);
      setIAmLog(true);
    }
  }, [handleOnLogout, identity, isLogged]);
  // console.log(localStorage.message);
  return (
    <div className="header">
      <Link to="/">

        <div className="header__div">
          {/**    <img

        <div className="header__div">
          {/** <img

            src={Logo}
            alt="Icone pour le retour à l'accueil"

            id="header__div__logo"
          />
 */}
          <h1 className="header__div__title">Estime ton AAH</h1>



          {/** 
          {localStorage.pseudo !== "" ? (

      {!isLogged ? (

            <div id="header__hello">

            <div className="header__hello">

              {getTheMoment()}, {message || localStorage.message}
              <button type="button" onClick={handleOnLogout}>
                Déconnexion
              </button>
            </div>
          ) : (
            <div className="header__hello">
              {getTheMoment()}
              <button type="button" onClick={handleLogin}>
                Connexion
              </button>
            </div>

          )}   */} 
          </div>
     </Link>

      {/**  <Navbar />*/}
    </div>
          );
};

Header.proptypes = {
  pseudo: Proptypes.string.isRequired,
  isLogged: Proptypes.func.isRequired,
  pseudoWelcome: Proptypes.string.isRequired,
  onLogout: Proptypes.func.isRequired
};

export default Header;
