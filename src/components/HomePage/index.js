import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Api from "src/API/index";
import { goodDateFormat } from "src/assets/datas/fonction";
import Logo from "src/assets/Logo.jpg";
import Proptypes from "prop-types";

import "./style.scss";

const HomePage = ({ isLogged, pseudo }) => {
  const [aah, setAah] = useState(0);
  const [dateAah, setDateAah] = useState("");
  useEffect(async () => {
    try {
      const aahresult = await Api.get("/apiext/aah");

      setAah(Object.values(aahresult.data.aahMontant)[0]);
      const date = Object.keys(aahresult.data.aahMontant)[0];
      setDateAah(goodDateFormat(date));
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="home__body">
      <div className="home__body__title">
        <img 
          src={Logo} 
          alt="Logo du site, c'est une femme dans un fauteuil avec un homme debout, ils tiennent un cœur qui a une blessure. Cette blessure perd de l'argent qui tombe au sol." 
          className="logo" />
        {isLogged === false || isLogged === undefined ? (
          <div>
            <Link to="/login">
              <button type="submit">Connexion</button>
            </Link>
            <Link to="/signup">
              <button>Inscription</button>
            </Link>
          </div>
        ) : (
          isLogged === true && null
        )}
        <h2 className="home__title">
          Bienvenue, {isLogged && <span>{pseudo}</span>}
        </h2>

        <p className="home__paragraphe">
          Ce site a pour but de permettre à une personne en situation
          d'invalidité d'estimer son allocation adulte handicapé
          (AAH), en fonction de tous les revenus du foyer.
        </p>
        <p className="home__paragraphe">
          A ce jour, le montant de l'AAH depuis le {dateAah} est de {aah.toFixed(2)} €.
        </p>
        <p className="home__paragraphe__note">
          Intégration du nouvel abattement 2022 de 5 000 € pour le conjoint et 1 400 € par enfant.
        </p>
        {isLogged === false || isLogged === undefined ? (
          <Link to="/login">
            <button type="submit">
              Connectez-vous pour faire une estimation !
            </button>
          </Link>
        ) : (
          <Link to="/formulaire">
            <button>Faire une estimation !</button>
          </Link>
        )}
      </div>
    </div>
  );
};
HomePage.proptypes = {
  isLogged: Proptypes.bool.isRequired,
};
export default HomePage;
