import React from "react";
import { Link } from "react-router-dom";

import "./style.scss";

const Formulaire = () => {
  const date = new Date().getFullYear();

  return (
    <div>
      <h2>Formulaire</h2>
      <p>
        Avant toutes choses, il va nous falloir certaines informations pour le
        calcul de l'AAH. Vous allez devoir remplir un formulaire. Celui-ci
        prendra approximativement 10 minutes de votre temps. Le calcul se fera
        sur l'année en cours moins 2ans. Nous sommes donc en {date}, donc
        munissez vous de tous les bulletins de salaire de {date - 2}
      </p>
      <p>Pour gagner du temps, veuillez préparer ces documents :</p>
      <ul>
        <li>Votre bulletin de salaire {date - 2}</li>
        <li>Le bulletin de salaire de votre conjoint(e) {date - 2}</li>
        <li>
          Le bulletin de salaire de votre (vos) enfant(s) {date - 2} ou des
          personnes à votre charge
        </li>
      </ul>
      <p>Le formulaire sera en quatre parties.</p>
      <ul>
        <li>Les questions sur votre foyer</li>
        <li>Celle vous concernant</li>
        <li>Celle de votre conjoint(e)</li>
        <li>Celle de votre (vos) enfant(s) et ou des personnes à charge</li>
      </ul>
      <p>
        Concernant les informations que vous allez nous fournir, Elle seront
        stocké en base données privé. Elle pourront êtres supprimés sur demande
        de votre part via <Link to="/contact">le formulaire de contact</Link>
      </p>
      <Link to="/form-questions">Départ du formulaire</Link>
    </div>
  );
};

export default Formulaire;
