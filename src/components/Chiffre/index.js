import React from "react";

import "./style.scss";

const Chiffre = ({ 
  chiffres, 
  resNbArticles,
  resNbGuestbooks,
  resNbComments,
  resNbUsers,
  resNbSimulations,

  resAahDescription,
  resAahDate,
  resAahMontant,

  resMajorationPlafondCoupleDescription,
  resMajorationPlafondCoupleDate,
  resMajorationPlafondCoupleCoef,

  resCoefPersonneAChargeDescription,
  resCoefPersonneAChargeDate,
  resCoefPersonneAChargeCoef,

  resSmichbDescription,
  resSmichbDate,
  resSmichbMontant,

  resSmichbtfDescription,
  resSmichbtfDate,
  resSmichbtfNombre,

  resMvaDescription,
  resMvaDate,
  resMvaMontant,

  resAgeMinimalDescription,
  resAgeMinimalDate,
  resAgeMinimalAge,

  resAgeRetraiteDescription,
  resAgeRetraiteDate,
  resAgeRetraiteAge,

  resTauxInvaliditeDescription,
  resTauxInvaliditeDate,
  resTauxInvaliditeTaux,

  resTauxInvaliditeMinimumDescription,
  resTauxInvaliditeMinimumDate,
  resTauxInvaliditeMinimumTaux,

})  => { 
  return (
    <div className="home__body">
      <div className="home__body__title">
      <h2 className="paragraphe__title">
        Les chiffres
      </h2>
      <div className="cardChiffre">
        <h3 className="cardChiffre__title">
          Les chiffres du site
        </h3>
        <div className="cardChiffre__paragraphe">
        <ul className="cardchiffre__liste">
          <li className="cardChiffre__title2-sous-liste">- {resNbArticles}</li>
          <li className="cardChiffre__title2-sous-liste">- {resNbGuestbooks}</li> 
          <li className="cardChiffre__title2-sous-liste">- {resNbComments}</li> 
          <li className="cardChiffre__title2-sous-liste">- {resNbUsers}</li>
          <li className="cardChiffre__title2-sous-liste">- {resNbSimulations}</li>
        </ul>
      </div></div>
      <div className="cardChiffre">
      <h3 className="cardChiffre__title">
        Les chiffres officiels
      </h3>
      <div className="cardChiffre__paragraphe">
      <ul className="cardChiffre__liste">
        <li className="cardChiffre__title2-sous-liste">- Le montant du {resSmichbDescription} depuis le {resSmichbDate} est de {resSmichbMontant} €.</li>
        <li className="cardChiffre__title2-sous-liste">- Le {resSmichbtfDescription} depuis le {resSmichbtfDate} est de {resSmichbtfNombre} heures par mois.</li>
        <li className="cardChiffre__title2-sous-liste">- Le {resAahDescription} depuis le {resAahDate} est de {resAahMontant} €.</li>
        <li className="cardChiffre__title2-sous-liste">- La {resMajorationPlafondCoupleDescription} depuis le { resMajorationPlafondCoupleDate } est de {resMajorationPlafondCoupleCoef} %.</li>
        <li className="cardChiffre__title2-sous-liste">- La {resCoefPersonneAChargeDescription} depuis le { resCoefPersonneAChargeDate } est de {resCoefPersonneAChargeCoef} %.</li>
        <li className="cardChiffre__title2-sous-liste">- La {resMvaDescription} depuis le {resMvaDate} est de {resMvaMontant} €.</li>
        <li className="cardChiffre__title2-sous-liste">- L'{resAgeMinimalDescription} depuis le {resAgeMinimalDate} est de {resAgeMinimalAge} ans.</li>
        <li className="cardChiffre__title2-sous-liste">- L'{resAgeRetraiteDescription} depuis le {resAgeRetraiteDate} est de {resAgeRetraiteAge} ans.</li>
        <li className="cardChiffre__title2-sous-liste">- Le {resTauxInvaliditeDescription} depuis le {resTauxInvaliditeDate} est de {resTauxInvaliditeTaux} %.</li>
        <li className="cardChiffre__title2-sous-liste">- Le {resTauxInvaliditeMinimumDescription} depuis le {resTauxInvaliditeMinimumDate} est de {resTauxInvaliditeMinimumTaux} %.</li>
        <li className="cardChiffre__title2-sous-liste__center">
          <span>
          Toutes les données sont fournis par{" "}
          <a href="https://openfisca.org" target="_blank" rel="noopener">
            <img
              alt="OpenFisca"
              src="https://openfisca.org/img/logo-openfisca.svg"
              height="24"
            />
          </a>
          , dont le{" "}
          <a href="https://github.com/openfisca/openfisca-core">code source </a>
          est utilisé sous licence{" "}
          <a
            href="https://choosealicense.com/licenses/agpl-3.0/"
            target="_blank"
            rel="noopener"
          >
            AGPL
          </a>
          .
        </span></li>
      </ul>
    </div></div>
    </div></div>
  );
};

export default Chiffre;

