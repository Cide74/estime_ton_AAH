import React from "react";
import { Link } from "react-router-dom";

import "./style.scss";

const Formulaire = ({ isLogged }) => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="home__body">
      <div className="home__body__title">
        <h2 className="paragraphe__title">Formulaire</h2>
        <div className="Preformulaire__wrapper">
          <p className="Preformulaire__paragraphe">
            Pour le calcul de l'AAH, il va nous falloir certaines informations.
            Vous allez devoir remplir un formulaire. Celui-ci prendra
            approximativement 5 minutes de votre temps. Le calcul se fera sur
            l'année en cours N-2. Nous sommes en {currentYear}, vous devez donc vous munir de
            tous les bulletins de salaire de {currentYear - 2}.
          </p>
          <div className="content_card">
            <h3 className="content_card__title">Pour gagner du temps,</h3>
            <h3 className="content_card__title">
              Veuillez préparer ces documents :
            </h3>
            <div className="content_card__paragraphe">
              <ul className="content_card__liste">
                <li className="Preformulaire__liste">
                  - Votre bulletin de salaire {currentYear - 2}.
                </li>
                <li className="Preformulaire__liste">
                  - Le bulletin de salaire de votre conjoint(e) de {currentYear - 2}.
                </li>
                <li className="Preformulaire__liste">
                  - Le bulletin de salaire {currentYear - 2} de votre (vos) enfant(s)
                  ou des personnes à votre charge.
                </li>
              </ul>
            </div>
          </div>

          <div className="content_card">
            <h3 className="content_card__title">
              Le formulaire sera en quatre parties :
            </h3>
            <div className="content_card__paragraphe">
              <ul className="content_card__liste">
                <li className="Preformulaire__liste">
                  - Les questions sur votre foyer.
                </li>
                <li className="Preformulaire__liste">
                  - Celles vous concernant.
                </li>
                <li className="Preformulaire__liste">
                  - Celles concernant votre conjoint(e).
                </li>
                <li className="Preformulaire__liste">
                  - Celles de votre (vos) enfant(s) et ou des personnes à charge.
                </li>
              </ul>
            </div>
          </div>

          <p className="Preformulaire__paragraphe">
            Concernant les informations que vous allez nous fournir, elles
            seront stockées sur une base de données privée. Elles pourront être
            supprimées par vous ou sur demande de votre part via{" "}
            <Link to="/contact" className="Preformulaire__link">
              le formulaire de contact.
            </Link>
          </p>

          {isLogged === false ? (
            <Link to="/login">
              <button>
                <div>Connectez-vous pour faire une simulation.</div>
              </button>
            </Link>
          ) : (
            <Link to="/form-questions">
              <button>Départ du formulaire</button>
            </Link>
          )}
          <h2 className="formResult__warning">
            - Attention ! Ceci n'est qu'une estimation, basée sur les
            informations que vous allez saisir lors du questionnaire et n'ouvre
            aucun droit et n'a aucune valeur juridique.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Formulaire;
