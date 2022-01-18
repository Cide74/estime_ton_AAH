import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Loading from "src/components/Loading";
import { 
  name,
  properNoun,
  dateUndefind,
} from "src/assets/datas/fonction";

import "./style.scss";
/**
 * @param {objet} infosimulation - Information d'une simulation de l'utilisateur
 * @returns
 */
const FormResult = ({ infosimulation }) => {
  const [data, setData] = useState(false);

    //create initial Collapse state using useState hook
  const [collapse, setCollapse] = useState(false);
  const [collapse2, setCollapse2] = useState(false);

  //create a custom function that will change Collapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    collapse ? setCollapse(false) : setCollapse(true);
  };
  const menuIconClick2 = () => {
    //condition checking to change state from true to false and vice versa
    collapse2 ? setCollapse2(false) : setCollapse2(true);
  };

  useEffect(() => {
    if (Object.entries(infosimulation).length === 0) {
      setData(false);
    } else {
      console.log("info de la simulation N° :", infosimulation.id);
      setData(true);
    }
  }, [infosimulation]);

  console.log(`infosimulation`, infosimulation)

  return (
    <div className="home__body">
      <div className="formResult">
      <h2 className="formResult__warning">
        - Attention ! Ceci n'est qu'une estimation, basée sur les informations que vous avez saisies lors du questionnaire, et qui n'ouvre aucun droit et n'a aucune valeur juridique.
      </h2>
      <h2 className="formResult__title">
        Voici votre estimation du {dateUndefind(infosimulation.updated_at)}.
      </h2>
      {data ? (
        <div 
          className="formResult__button"
          collapsed={collapse}>
          <div className="formResult__card">
            <h3 className="formResult__card__title">
              Le résultat simple :
            </h3>
            <p className="formResult__card__para"> 
              - {infosimulation.status_simple}
            </p>
          </div>
      
          <div onClick={menuIconClick}>  
            {collapse ? (
              <section>
                <div className="formResult__card">
                  <h3 className="formResult__card__title">
                    Le résultat détaillé :
                  </h3>
                  <p className="formResult__card__para"> 
                    - {infosimulation.status_aah}
                  </p>
                  <button type="submit">
                    Moins de détails !
                  </button>
                </div>
              </section>
            ):(
              <button type="submit">
                Plus de détails !
              </button>
              )}
          </div>

          <div onClick={menuIconClick2}>  
            {collapse2 ? (
              <div className="formResult__card">
                <h2 className="formResult__card__title1">
                  Ce que vous avez déclaré pour votre estimation :
                </h2>
                <h3 className="formResult__card__title">
                  Composition du foyer :
                </h3>
                  <div className="formResult__card__para">
                  <p className="formResult__card__list"> 
                    - Résidez-vous en France :{" "}
                    {infosimulation.place_of_residence ? "oui" : "non"}
                  </p>
                  <p className="formResult__card__list"> 
                    - Vivez-vous seul ou en couple :{" "}
                    {infosimulation.household_composition}
                  </p>
                  <p className="formResult__card__list"> 
                    - Avez-vous des enfants ou des personnes à charge :{" "}
                    {infosimulation.nb_child}
                  </p>
                  <p className="formResult__card__list"> 
                    - Percevez-vous les APL : 
                    {infosimulation.apl ? "oui" : "non"}
                  </p>
                  </div>

                  <h3 className="formResult__card__title">
                    Questions vous concernant :
                  </h3>
                  <div className="formResult__card__para">
                    <p className="formResult__card__list"> 
                      - Quel est votre âge : {infosimulation.applicant_age}
                    </p>
                    <p className="formResult__card__list"> 
                      - Etes-vous invalide :{" "}
                      {infosimulation.applicant_disability ? "oui" : "non"}
                    </p>
                    <p className="formResult__card__list"> 
                      - Quel est votre taux d'invalidité :{" "}
                      {infosimulation.applicant_disability_rate}%
                    </p>
                    <p className="formResult__card__list"> 
                      - Vos revenus issus du salariat :{" "}
                      {infosimulation.applicant_income_with_activity} €
                    </p>
                    <p className="formResult__card__list"> 
                      - Vos revenus hors activité de salariat :{" "}
                      {infosimulation.applicant_income_without_activity} €
                    </p>
                  </div>

                  { infosimulation.household_composition === "seul" ? ( " " ) : ( 
                    <section>
                      <h3 className="formResult__card__title">
                        Questions concernant votre conjoint(e):
                      </h3>
                      <div className="formResult__card__para">
                        <p className="formResult__card__list"> 
                          - Quel est l'âge de votre conjoint(e) :{" "}
                          {infosimulation.spouse_age}
                        </p>
                        <p className="formResult__card__list"> 
                          - Est-il(elle) invalide :{" "}
                          {infosimulation.spouse_disability ? "oui" : "non"}
                        </p>
                        <p className="formResult__card__list"> 
                          - Quel est son taux d'invalidité :{" "}
                          {infosimulation.spouse_disability_rate}%
                        </p>
                        <p className="formResult__card__list"> 
                          - Quels sont ses revenus issus du salariat :{" "}
                          {infosimulation.spouse_income_with_activity} €
                        </p>
                        <p className="formResult__card__list"> 
                          - Quels sont ses revenus hors activité de salariat :{" "}
                          {infosimulation.spouse_income_without_activity} €
                        </p>
                      </div>
                    </section>
                  )}

                  { infosimulation.nb_child === 0 ? ( " " ) : ( 
                    <section>
                      <h3 className="formResult__card__title">
                        Enfant(s) ou personne(s) à charge :
                      </h3>
                      <div className="formResult__card__para">
                        <p className="formResult__card__list"> 
                          - Vous avez : {" "}
                          {infosimulation.nb_child} enfant(s) ou personne(s) à charges.
                        </p>
                      { infosimulation.child_income1 === 0 ? ( " " ) : ( 
                        <p className="formResult__card__list"> 
                          - La somme des salaires de toutes les personnes à charge :{" "}
                          {infosimulation.child_income1}€
                        </p>
                      )} 
                      </div>
                    </section>
                  )}

                  <section>
                      <h3 className="formResult__card__title">
                        Les données le jour de l'estimation :
                      </h3>
                      <div className="formResult__card__para">
                        <p className="formResult__card__list"> 
                          - Le montant du smic horaire brut : {" "}
                          {infosimulation.smichb} €
                        </p>
                        <p className="formResult__card__list"> 
                          - Le nombre d'heures travaillées forfaitaires : {" "}
                          {infosimulation.smicnbtf} heures par mois.
                        </p>
                        <p className="formResult__card__list"> 
                          - Le montant mensuel de l'allocation adulte handicapé : {" "}
                          {infosimulation.aah_amount} €
                        </p>
                        <p className="formResult__card__list"> 
                          - La majoration du plafond de l'aah pour un couple : {" "}
                          {infosimulation.majorationPlafonCouple} %
                        </p>
                        <p className="formResult__card__list"> 
                          - La majoration de plafond pour un enfant ou une personne à charge : {" "}
                          {infosimulation.coefPersonneACharge} %
                        </p>
                        <p className="formResult__card__list"> 
                          - La majoration pour la vie autonome : {" "}
                          {infosimulation.mva_amount} €
                        </p>
                        <p className="formResult__card__list"> 
                          - L'âge minimal pour bénéficier de l'aah : {" "}
                          {infosimulation.ageMinimal} ans.
                        </p>
                        <p className="formResult__card__list"> 
                          - L'âge légal de départ à la retraite : {" "}
                          {infosimulation.ageRetraite} ans
                        </p>
                        <p className="formResult__card__list"> 
                          - Le taux d'incapacité minimum pour bénéficier de l'aah : {" "}
                          {infosimulation.disability_rate_max} %
                        </p>
                        <p className="formResult__card__list"> 
                          - Le taux d'incapacité minimum : {" "}
                          {infosimulation.disability_rate_mini} %
                        </p>
                      </div>
                    </section>
                    
                    <section>
                      <h3 className="formResult__card__title">
                        Vos données le jour de l'estimation :
                      </h3>
                      <div className="formResult__card__para">
                        <p className="formResult__card__list"> 
                          - Exigibilité à l'AAH :{" "}
                          {infosimulation.eligibilite_aah_foyer ? "oui" : "non"}
                        </p>
                        <p className="formResult__card__list"> 
                          - Exigibilité à l'MVA :{" "}
                          {infosimulation.eligibilite_mva_foyer ? "oui" : "non"}
                        </p>
                        <p className="formResult__card__list"> 
                          - Le coefficient de votre foyer : {" "}
                          {infosimulation.coef_foyer} %
                        </p>
                        <p className="formResult__card__list"> 
                          - Le plafond annuel de votre foyer : {" "}
                          {infosimulation.plafond_foyer_annuel} €.
                        </p>
                        <p className="formResult__card__list"> 
                          - Le plafond mensuel de votre foyer : {" "}
                          {infosimulation.plafond_foyer_mensuel} €
                        </p>
                        <p className="formResult__card__list"> 
                          - Le montant AAH Maximum que vous pouvez percevoir : {" "}
                          {infosimulation.aah_max} €
                        </p>
                        <p className="formResult__card__list"> 
                          - Le montant AAH plafonné à percevoir : {" "}
                          {infosimulation.montant_aah_sans_mva_mensuel} €
                        </p>
                        <p className="formResult__card__list"> 
                          - {infosimulation.status_simple}
                        </p>
                      </div>
                    </section>
                <button type="submit">
                  Moins de détails !
                </button>
              </div>
            ):(
              <button type="submit">
                Tous les détails de votre simulation !
              </button>
              )}
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
