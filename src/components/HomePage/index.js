import React from "react";
import { Link } from "react-router-dom";
import Logo from "src/assets/Logo.png";
import Proptypes from "prop-types";

import "./style.scss";

const HomePage = ({ isLogged, pseudo }) => {
  return (
    <div className="home__body">
      <div className="home__body__title">
        <img
          src={Logo}
          alt="logo du site"
          className="logo"
        />
        {isLogged === false || isLogged === undefined ? (
          <div>
            <Link to="/login"> 
              <button type="submit">
                Connection 
              </button>
            </Link> 
            <Link to="/signup">
              <button>
                Inscription
              </button>
            </Link>
          </div>
        ) : (
          isLogged === true && null
        )}
        <h2 className="home__title">
          Bienvenue, {isLogged && <span>{pseudo}</span>} 
        </h2>

        <h3 className="home__paragraphe">
          Ce site a pour but de permettre à une personne en situation d'invalidité, de pouvoir estimer son allocation adulte handicape (AAH), en fonction de tous les revenus du foyer.
        </h3>

        {isLogged === false || isLogged === undefined ? (
          <Link to="/login">
            <button type="submit">
              Connectez-vous pour faire une estimation !
            </button>
          </Link> 
        ) : (
          <Link to="/formulaire"> 
            <button>
              Faire une estimation !
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};
HomePage.proptypes = {
  isLogged: Proptypes.bool.isRequired
};
export default HomePage;
