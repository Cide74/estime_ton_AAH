import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Loading from "src/components/Loading";

import "./style.scss";
/**
 * @param {objet} infosimulation - Information d'une simulation de l'utilisateur
 * @returns
 */
const FormResult = ({ infosimulation }) => {
  const [data, setData] = useState(false);

  useEffect(() => {
    if (Object.entries(infosimulation).length === 0) {
      setData(false);
    } else {
      console.log("info de la simulation N° :", infosimulation.id);
      setData(true);
    }
  }, [infosimulation]);
  return (
    <div className="home__body">
      <div className="home__body__title">
      <h2 className="paragraphe__title">
        Voici ce que vous avez déclaré et le résultat</h2>
      {data ? (
        <div>
          <p>le résultat : {infosimulation.status_aah}</p>
          <p>Ce que vous avez déclaré pour ce formulaire :</p>
          <div>
            <ul>
              <li>
                Résidez-vous en France :{" "}
                {infosimulation.place_of_residence ? "oui" : "non"}
              </li>
              <li>
                Vivez-vous seul ou en couple :{" "}
                {infosimulation.household_composition}
              </li>
              <li>
                Avez-vous des enfants ou des personnes à charge :{" "}
                {infosimulation.nb_child}
              </li>
              <li>
                Percevez-vous les APL : {infosimulation.apl ? "oui" : "non"}
              </li>
            </ul>{" "}
            <p>Question vous concernant : </p>
            <ul>
              <li>Quel est votre age : {infosimulation.applicant_age}</li>
              <li>
                Etes-vous invalide :{" "}
                {infosimulation.applicant_disability ? "oui" : "non"}
              </li>
              <li>
                Quel est votre taux d'invalidité :{" "}
                {infosimulation.applicant_disability_rate}%
              </li>
              <li>
                Vos revenus issue du salariat :{" "}
                {infosimulation.applicant_income_with_activity}€
              </li>
              <li>
                Vos revenus hors activité du salariat :{" "}
                {infosimulation.applicant_income_without_activity}€{" "}
              </li>
            </ul>
            <p>Question concernant votre conjoint(e): </p>
            <ul>
              <li>
                Quel est l'age de votre conjoint(e) :{" "}
                {infosimulation.spouse_age}
              </li>
              <li>
                Est il(elle) invalide :{" "}
                {infosimulation.spouse_disability ? "oui" : "non"}
              </li>
              <li>
                Quel est son taux d'invalidité :{" "}
                {infosimulation.spouse_disability_rate}%
              </li>
              <li>
                Quel sont ses revenus issue du salariat :{" "}
                {infosimulation.spouse_income_with_activity}€
              </li>
              <li>
                Ses revenus hors activité du salariat :{" "}
                {infosimulation.spouse_income_without_activity}€{" "}
              </li>
            </ul>
            <p>Enfant(s) ou personne(s) à charge</p>
            <ul>
              <li>
                La somme des salaires de toutes les personnes à charge :{" "}
                {infosimulation.child_income1}€
              </li>
            </ul>
          </div>
          
        </div>
      ) : (
        <Loading />
      )}
    </div>
    </div>
  );
};

FormResult.proptype = {
  infosimulation: PropTypes.object.isRequiered
};
FormResult.defaultProps = {
  infosimulation: {}
};
export default FormResult;
