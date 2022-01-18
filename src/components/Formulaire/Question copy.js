import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Proptypes from "prop-types";
import "./style.scss";

/**
 *
 * @param {number} nb_Child - Si la personne a des enfants / ou des personnes à charge
 * @param {number} applicant_age - L'age de la personne
 * @param {number} applicant_income_with_activity - Salaire net imposable du demandeur
 * @param {number} applicant_income_without_activity - autres revenue net imposable du demandeur
 * @param {number} spouse_age - L'age du(e la) conjoint(e)
 * @param {number} spouse_income_with_activity - Salaire net imposable du(e la) conjoint(e)
 * @param {number} spouse_income_without_activity - autres revenue net imposable du(e la) conjoint(e)
 * @param {number} child_income1 - renvue de la personne à charge 1
 * @param {string} message - Message de confirmation d'envoi du formulaire
 * @param {boolean} success - Réussite de l'envoi du message
 * @param {function} onSubmitQuestion - Déclenche l'envoi du formulaire en BDD
 * @param {function} fieldChangeQuestion - Agit sur les inputs
 * @returns JSX component
 *
 */
const Question = ({
  nb_child,
  applicant_age,
  applicant_income_with_activity,
  applicant_income_without_activity,
  spouse_age,
  spouse_income_with_activity,
  spouse_income_without_activity,
  child_income1,
  onSubmitQuestion,
  changeFieldQuestion,
  message,
  success,
  isLogged
}) => {

 

  const [consort, setConsort] = useState(false); // en couple = true
  const [child, setChild] = useState(false); // personnes à charge
  const [nbrInCharge, setNbrInCharge] = useState(0);
  const [disableApplicant, setDisableApplicant] = useState(false);
  const [disableConsort, setDisableConsort] = useState(false);
  const [gotJob, setGotJob] = useState(false);
  const [msg, setMsg] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const navigate = useNavigate();

 

 

  const date = new Date().getFullYear();

  const handleOnSubmitForm = (evt) => {
    evt.preventDefault();
    setIsSubmit(true);
    onSubmitQuestion();
  };

  const otherGotAJob = (name, value) => {
    if (name === "peopleOnWork") {
      setGotJob(value);
    }
  };

  const checkDisabilityApplicant = (name, value) => {
    if (name === "applicant_disability") {
      if (value === "true") {
        setDisableApplicant(true);
      } else {
        setDisableApplicant(false);
      }
    }
  };

  const checkDisabilityConsort = (name, value) => {
    if (name === "spouse_disability") {
      if (value === "true") {
        setDisableConsort(true);
      } else {
        setDisableConsort(false);
      }
    }
  };

  const isSingle = (name, value) => {
    if (name === "household_composition") {
      if (value === "en couple") {
        setConsort(true);
      } else {
        setConsort(false);
      }
    }
  };

  const dependents = (name, value) => {
    if (name === "nb_child") {
      if (value > 0) {
        setChild(true);
      } else {
        setChild(false);
      }
      setNbrInCharge(+value);
    }
  };

  const handleInputChangeForm = (evt) => {
    const keyName = evt.target.name;
    const value = evt.target.value;
    otherGotAJob(keyName, value);
    isSingle(keyName, value);
    dependents(keyName, value);
    checkDisabilityApplicant(keyName, value);
    checkDisabilityConsort(keyName, value);
    changeFieldQuestion(keyName, value);
  };

  useEffect(() => {
    let time;
    if (success && isSubmit) {
      time = setTimeout(() => {
        setMsg("");
        setIsSubmit(false);
        navigate("/");
      }, 3000);
      setMsg(message);
    }
    return () => clearTimeout(time);
  });

  return (
    <div className="home__body">
      <div className="home__body__title">  
        <h2 className="paragraphe__title">
          Le formulaire
        </h2>
        {isLogged === false || isLogged === undefined ? (
          <div>
            <button type="submit">
              <Link to="/login"> 
                Connectez-vous pour faire une estimation !
              </Link> 
            </button>
            <button>
              <Link to="/signup"> 
                Inscription
              </Link>
            </button>
          </div>
        ) : (
        <form onSubmit={handleOnSubmitForm}>
          <ul className="form">
            <li className="form__compo">
              <fieldset >
                <legend className="form__title">
                  Composition du foyer :
                </legend>
                <div className="form__compo__in">
                  <span className="form__compo__in__question">
                    Résidez-vous en France ?
                  </span>
                <div>
                  <label 
                    className="form__compo__in__response"
                    htmlFor="place_of_residence"
                  >
                    oui
                    <input
                      className="form__compo__in__response"
                      type="radio"
                      name="place_of_residence"
                      id="place_of_residence"
                      value={true}
                      onChange={handleInputChangeForm}
                    />
                  </label>
                  <label className="form__compo__in__response">
                    non
                    <input
                      className="form__compo__in__response"
                      type="radio"
                      name="place_of_residence"
                      id="place_of_residence"
                      value={false}
                      onChange={handleInputChangeForm}
                    />
                  </label>
                </div>
              </div>
              <div className="form__compo__in">
                <span className="form__compo__in__question">Vivez-vous seul ou en couple ?</span>
                  <div>
                    <label 
                      htmlFor="household_composition"
                      className="form__compo__in__response"
                    >
                      seul
                      <input
                        className="form__compo__in__response"
                        type="radio"
                        name="household_composition"
                        id="household_composition"
                        value="seul"
                        onChange={handleInputChangeForm}
                      />
                    </label>
                    <label className="form__compo__in__response">
                      en couple
                      <input
                        className="form__compo__in__response"
                        type="radio"
                        name="household_composition"
                        id="household_composition"
                        value="en couple"
                        onChange={handleInputChangeForm}
                      />
                    </label>
                  </div>
              </div>
              <div className="form__compo__in">
                <span className="form__compo__in__question">
                  Avez-vous des enfants et / ou des personnes à charge ?
                </span>
                <label 
                  htmlFor="nb_child">
                  <input
                    className="form__compo__in__response" 
                    required
                    type="number"
                    min="0"
                    align="center"
                    id="nb_child"
                    name="nb_child"
                    value={nb_child}
                    onChange={handleInputChangeForm}
                  />
                </label>
              </div>
              <div className="form__compo__in">
                <span className="form__compo__in__question">
                  Percevez-vous les APL(Aide Personnalisée au Logement) ?
                </span>
                <div>
                  <label 
                    className="form__compo__in__response"
                    htmlFor="apl"
                  >
                    oui
                    <input
                      className="form__compo__in__response"
                      type="radio"
                      name="apl"
                      id="apl"
                      value={true}
                      onChange={handleInputChangeForm}
                    />
                  </label>
                  <label className="form__compo__in__response">
                    non
                    <input
                      className="form__compo__in__response"
                      type="radio"
                      name="apl"
                      id="apl"
                      value={false}
                      onChange={handleInputChangeForm}
                    />
                  </label>
                </div>
              </div>
              </fieldset>
          </li>
          <li className="form__compo">
            <fieldset>
              <legend className="form__title">
                Le demandeur :
              </legend>
              <div className="form__compo__in">
                <span className="form__compo__in__question">
                  Quel est votre âge ?
                </span>
                <label
                  htmlFor="applicant_age">
                  <div>
                    <input
                      className="form__compo__in__response"
                      type="number"
                      placeholder="Votre age"
                      min="18"
                      name="applicant_age"
                      id="applicant_age"
                      value={applicant_age}
                      onChange={handleInputChangeForm}
                      required
                    />
                  </div>
                </label>
              </div>
              <div className="form__compo__in">
                <span className="form__compo__in__question">
                  Êtes-vous invalide ?
                </span>
                <div>
                  <label 
                    className="form__compo__in__response"
                    htmlFor="place_of_residence"
                  >
                  oui
                  <input
                    className="form__compo__in__response"
                    type="radio"
                    name="applicant_disability"
                    id="applicant_disability"
                    value={true}
                    onChange={handleInputChangeForm}
                  />
                </label>
                <label className="form__compo__in__response">
                  non
                  <input
                    className="form__compo__in__response"
                    type="radio"
                    name="applicant_disability"
                    id="applicant_disability"
                    value={false}
                    onChange={handleInputChangeForm}
                  />
                </label>
              
              {disableApplicant && (
              <div className="form__compo__in">
                <span className="form__compo__in__question">
                    Quel est votre taux d'invalidité ?
                </span>
                <label 
                  className="form__compo__in__response"
                  htmlFor="applicant_disability_rate">
                    inférieur à 80%
                    <input
                      type="radio"
                      name="applicant_disability_rate"
                      id="applicant_disability_rate"
                      value="0.7"
                      onChange={handleInputChangeForm}
                    />
                  </label>
                  <label className="form__compo__in__response">
                    Supérieur ou égale à 80%
                    <input
                      type="radio"
                      name="applicant_disability_rate"
                      id="applicant_disability_rate"
                      value="0.8"
                      onChange={handleInputChangeForm}
                    />
                  </label>
                </div>
              )}
              </div></div>
              <div className="form__compo__in">
                <span className="form__compo__in__question">
                  Vos revenus issus du salariat de {date - 2} ?
                </span>
                <p className="card__comment__footer">(Le revenu net imposable annuel)</p>
                <label htmlFor="applicant_income_with_activity">
                  <input
                    className="form__compo__in__response" 
                    min="0"
                    type="number"
                    name="applicant_income_with_activity"
                    id="applicant_income_with_activity"
                    placeholder="net imposable"
                    value={applicant_income_with_activity}
                    onChange={handleInputChangeForm}
                    required
                  />
                  €
                </label>
              </div>
              <div className="form__compo__in">
                <span className="form__compo__in__question">
                  Vos revenus de {date - 2} hors activité du salariat ?
                </span>
                <p className="card__comment__footer">(Le revenu net imposable annuel)</p>
                <label htmlFor="applicant_income_without_activity">
                  
                  <input
                    className="form__compo__in__response" 
                    min="0"
                    type="number"
                    name="applicant_income_without_activity"
                    id="applicant_income_without_activity"
                    value={applicant_income_without_activity}
                    onChange={handleInputChangeForm}
                    placeholder="autres revenus"
                    required
                  />€
                </label>
              </div>
            </fieldset>
          </li>
          {consort && (
            <li className="form__compo">
              <fieldset>
                <legend className="form__title">
                  Le(a) conjoint(e)
                </legend>
                  <div className="form__compo__in">
                    <span className="form__compo__in__question">
                      Son âge ?
                    </span>
                    <label htmlFor="spouse_age">
                    <input
                      className="form__compo__in__response" 
                      type="number"
                      id="spouse_age"
                      name="spouse_age"
                      min="18"
                      value={spouse_age}
                      onChange={handleInputChangeForm}
                      placeholder="Age de votre conjoint(e)"
                    />
                  </label>
                </div>
                <div className="form__compo__in">
                  <span className="form__compo__in__question">
                    Est il / elle en invalidité ?
                  </span>
                  <div>
                  <label 
                    className="form__compo__in__response"
                    htmlFor="spouse_disability">
                    oui
                    <input
                      className="form__compo__in__response"
                      type="radio"
                      name="spouse_disability"
                      id="spouse_disability"
                      value={true}
                      onChange={handleInputChangeForm}
                    />
                  </label>
                  <label className="form__compo__in__response">
                    non
                    <input
                      className="form__compo__in__response"
                      type="radio"
                      name="spouse_disability"
                      id="spouse_disability"
                      value={false}
                      onChange={handleInputChangeForm}
                    />
                  </label>
                </div>
                {disableConsort && (
                  <div className="form__compo__in">
                    <span className="form__compo__in__question">
                        Quel est votre taux d'invalidité ?
                    </span>
                    <label 
                      className="form__compo__in__response"
                      htmlFor="applicant_disability_rate">
                        inférieur à 80%
                        <input
                          type="radio"
                          name="applicant_disability_rate"
                          id="applicant_disability_rate"
                          value="0.7"
                          onChange={handleInputChangeForm}
                        />
                    </label>
                    <label className="form__compo__in__response">
                      Supérieur ou égale à 80%
                      <input
                        type="radio"
                        name="applicant_disability_rate"
                        id="applicant_disability_rate"
                        value="0.8"
                        onChange={handleInputChangeForm}
                      />
                    </label>
                  </div>
                )}
                </div>
                <div className="form__compo__in">
                  <span className="form__compo__in__question">
                    Vos revenus issus du salariat de {date - 2} ?
                  </span>
                  <p className="card__comment__footer">(Le revenu net imposable annuel)</p>
                  <label htmlFor="spouse_income_with_activity">
                    <input
                      className="form__compo__in__response"
                      type="number"
                      min="0"
                      name="spouse_income_with_activity"
                      id="spouse_income_with_activity"
                      placeholder="Net imposable"
                      value={spouse_income_with_activity}
                      onChange={handleInputChangeForm}
                    />
                    €
                  </label>
                </div>
                <div className="form__compo__in">
                  <span className="form__compo__in__question">
                    Vos revenus de {date - 2} hors activité du salariat ?
                  </span>
                  <p className="card__comment__footer">(Le revenu net imposable annuel)</p>
                  <label htmlFor="spouse_income_without_activity">
                    <input
                      className="form__compo__in__response" 
                      type="number"
                      min="0"
                      name="spouse_income_without_activity"
                      id="spouse_income_without_activity"
                      placeholder="autres revenus"
                      value={spouse_income_without_activity}
                      onChange={handleInputChangeForm}
                    />
                    €
                  </label>
                </div>
              </fieldset>
            </li>
          )}
          {child && nbrInCharge >= 1 ? (
            <li className="form__compo">
              <fieldset>
                <legend className="form__title">
                  Enfant(s) ou personne(s) à charge 
                </legend>
                  <div className="form__compo__in">
                    <span className="form__compo__in__question">
                      A-t-il(elle) travaillé(e) en {date - 2} ?
                    </span>
                    <div>
                  <label 
                    className="form__compo__in__response" 
                    htmlFor="peopleOnWork"
                  >
                  oui
                  <input
                    className="form__compo__in__response" 
                    type="radio"
                    name="peopleOnWork"
                    id="peopleOnWork"
                    value={true}
                    onChange={handleInputChangeForm}
                  />
                  </label>
                  <label className="form__compo__in__response" >
                    non
                    <input
                      className="form__compo__in__response" 
                      type="radio"
                      name="peopleOnWork"
                      id="peopleOnWork"
                      value={false}
                      onChange={handleInputChangeForm}
                    />
                  </label>
                  </div>
                {gotJob === "true" && (
                  <div className="form__compo__in">
                    <span className="form__compo__in__question">
                      Sommes des salaires de toutes les personnes à charge de{" "} {date - 2} ?
                </span>
                <p className="card__comment__footer">(Le revenu net imposable annuel)</p>
                    <label
                      htmlFor="child_income1">
                      <input
                      className="form__compo__in__response" 
                        type="number"
                        name="child_income1"
                        id="child_income1"
                        min="1"
                        placeholder="net imposable"
                        value={child_income1}
                        onChange={handleInputChangeForm}
                      />
                      €
                    </label>
                  </div>
                )}
                </div>
              </fieldset>
            </li>
          ) : null}
        </ul>
        {success && isSubmit && (
            <div className="confirm">
              <p>{msg}</p>
            </div>
          )} 
        <button type="submit">
          Validation
        </button>
      </form>
      )}
      <h2 className="formResult__warning">
        - Attention ! Ceci n'est qu'une estimation, basée sur les informations que vous allez entré dans le questionnaire et n'ouvre aucun droit et n'a aucune valeur juridique.
      </h2>
    </div>
    </div>
  );
};

Question.proptypes = {
  nb_child: Proptypes.number.isRequired,
  applicant_age: Proptypes.number.isRequired,
  applicant_income_with_activity: Proptypes.number.isRequired,
  applicant_income_without_activity: Proptypes.number.isRequired,
  spouse_age: Proptypes.number,
  spouse_income_with_activity: Proptypes.number,
  spouse_income_without_activity: Proptypes.number,
  child_income1: Proptypes.number,
  onSubmitQuestion: Proptypes.func.isRequired,
  changeFieldQuestion: Proptypes.func.isRequired
};

Question.defaultProps = {
  nb_child: 0,
  applicant_age: 0
};
export default Question;
