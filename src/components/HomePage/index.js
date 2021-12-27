import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Proptypes from "prop-types";
import Information from "src/components/Information";

import "./style.scss";

const HomePage = ({ isLogged }) => {
  useEffect(() => {
    // console.log("je met à jour le compo HomePage");
  }, [isLogged]);
  //   console.log(
  //     `Je check isLogged HomePage = ${isLogged}
  //  Je check le localstorage HomePage => ${localStorage.getItem("pseudo")}`
  //   );
  // TODO faire une condition pour caché la div d'inscription et de login au cas ou l'on soit déjà connecté
  return (
    <div id="home__body">
      <div id="home__body__title">
      <h2>Bienvenue, </h2>
      {isLogged === false || isLogged === undefined ? (
        <div>
          <Link to="/login">Connection </Link> /
          <Link to="/signup"> Inscription</Link>
        </div>
      ) : (
        isLogged === true && null
      )}

      <Link to="/formulaire">formulaire</Link>
      <Information />
    </div>
    </div>
  );
};
HomePage.proptypes = {
  isLogged: Proptypes.bool.isRequired
};
export default HomePage;
