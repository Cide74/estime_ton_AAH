import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Api from "src/API/index";
import { goodDateFormat } from "src/assets/datas/fonction";
import Logo from "src/assets/Logo.png";
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
        <img src={Logo} alt="logo du site" className="logo" />
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

        <h3 className="home__paragraphe">
          Ce site a pour but de permettre à une personne en situation
          d'invalidité d'estimer son allocation adulte handicapé
          (AAH), en fonction de tous les revenus du foyer.
        </h3>
        <p>
          A ce jour, le montant de l'AAH du {dateAah} est de {aah}€
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
