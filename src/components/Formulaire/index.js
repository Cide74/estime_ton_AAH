import React from "react";
import { Link } from "react-router-dom";

import "./style.scss";

const Formulaire = ({ pseudo, isLogged }) => {
  const date = new Date().getFullYear();

  console.log(`pseudo du formulaire`, pseudo)
  console.log(`isLogged  du formulaire`, isLogged)


  const handleOnLogin = () => {
    login.push("/login");
  };

  return (
    <div className="home__body">
      <div className="home__body__title">
        <h2 className="paragraphe__title">
          Formulaire
        </h2>
          <div className="Preformulaire__wrapper">
            <p className="Preformulaire__paragraphe">
              Pour le calcul de l'AAH, il va nous falloir certaines informations.
              Vous allez devoir remplir un formulaire. Celui-ci prendra
              approximativement 5 minutes de votre temps. Le calcul se fera sur
              l'année en cours N-2. Nous sommes en {date}, donc munissez-vous de
              tous les bulletins de salaire de {date - 2}.
            </p>
            <div className="cardChiffre">
              <h3 className="cardChiffre__title">
                Pour gagner du temps,
              </h3>
              <h3 className="cardChiffre__title">
                Veuillez préparer ces documents :
              </h3>
              <div className="cardChiffre__paragraphe">
                <ul className="cardChiffre__liste">
                  <li className="Preformulaire__liste">
                    - Votre bulletin de salaire {date - 2}.
                  </li>
                  <li className="Preformulaire__liste">
                    - Le bulletin de salaire de votre conjoint(e) de {date - 2}.
                  </li>
                  <li className="Preformulaire__liste">
                    - Le bulletin de salaire {date - 2} de votre (vos) enfant(s) ou des
                    personnes à votre charge.
                  </li>
                </ul>
              </div>
            </div>

            <div className="cardChiffre">
              <h3 className="cardChiffre__title">
                Le formulaire sera en quatre parties :
              </h3>
              <div className="cardChiffre__paragraphe">
                <ul className="cardChiffre__liste">
                  <li className="Preformulaire__liste">
                    - Les questions sur votre foyer.
                  </li>
                  <li className="Preformulaire__liste">
                    - Celle vous concernant.
                  </li>
                  <li className="Preformulaire__liste">
                    - Celle de votre conjoint(e).
                  </li>
                  <li className="Preformulaire__liste">
                    - Celle de votre (vos) enfant(s) et ou des personnes à charge.
                  </li>
                </ul>
              </div>
            </div>

            <p className="Preformulaire__paragraphe">
              Concernant les informations que vous allez nous fournir, elles seront
              stockées sur une base de données privé. Elles pourront être supprimées par vous ou sur
              demande de votre part via{" "}
              <Link to="/contact" className="Preformulaire__link">
                le formulaire de contact.
              </Link>
            </p>

            { isLogged === false ? (
              
              <Link to="/login">
                <button >
                  <div onClick={handleOnLogin}>

                    Connectez-vous, pour faire une simulation.
                  </div>
                </button> 
              </Link>
            ) :(
              <Link to="/form-questions">
                <button>
                  Départ du formulaire
                </button>
              </Link>
            )}
            <h2 className="formResult__warning">
              - Attention ! Ceci n'est qu'une estimation, basée sur les informations que vous allez entré dans le questionnaire et n'ouvre aucun droit et n'a aucune valeur juridique.
            </h2>
          </div>
      </div>
    </div>
    
  );
};

export default Formulaire;
