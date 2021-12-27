import React, { useState } from "react";
import Proptypes from "prop-types";
import "./style.scss";
/**
 *
 * @param {number} nbrChild - Si la personne a des enfants / ou des personnes à charge
 * @param {function} onSubmitQuestion - Déclenche l'envoi du formulaire en BDD
 * @param {function} fieldChangeQuestion - Agi sur les inputs
 *
 */
const Question = ({ nb_Child, onSubmitQuestion, changeFieldQuestion }) => {
  const date = new Date().getFullYear();
  const [rangeValue, setRangeValue] = useState(0.5);

  const handleOnSubmitForm1 = evt => {
    evt.preventDefault();
    onSubmitQuestion();
  };
  const handleInputChangeForm1 = evt => {
    let value = evt.target.value;
    let name = evt.target.name;
    if (evt.target.name === "mineDisability") {
      setRangeValue(evt.target.value);
    }
    changeFieldQuestion(name, value);
  };

  return (
    <div>
      <ul>
        <li>
          <form onSubmit={handleOnSubmitForm1}>
            <fieldset>
              <legend>Composition du foyer</legend>
              <div>
                <span>Résidez-vous en France ?</span>
                <label htmlFor="place_of_residence">
                  oui
                  <input
                    type="radio"
                    name="place_of_residence"
                    id="place_of_residence"
                    value="true"
                    onChange={handleInputChangeForm1}
                  />
                </label>
                <label>
                  non
                  <input
                    type="radio"
                    name="place_of_residence"
                    id="place_of_residence"
                    value="false"
                    onChange={handleInputChangeForm1}
                  />
                </label>
              </div>
              <div>
                <span>Vivez-vous seul ou en couple ?</span>
                <label htmlFor="household_composition">
                  seul
                  <input
                    type="radio"
                    name="household_composition"
                    id="household_composition"
                    value="seul"
                    onChange={handleInputChangeForm1}
                  />
                </label>
                <label>
                  couple
                  <input
                    type="radio"
                    name="household_composition"
                    id="household_composition"
                    value="en couple"
                    onChange={handleInputChangeForm1}
                  />
                </label>
              </div>
              <div>
                <span>
                  Avez-vous des enfants à charge ou de personnes à charge ?
                </span>
                <label htmlFor="nb_Child">
                  <input
                    type="number"
                    min="0"
                    max="10"
                    align="center"
                    name="nb_Child"
                    value={nb_Child}
                    onChange={handleInputChangeForm1}
                  />
                </label>
              </div>
              <div>
                <span>
                  Percevez-vous les APL(Aide Personnalisée au Logement) ?
                </span>
                <label htmlFor="apl">
                  oui
                  <input
                    type="radio"
                    name="apl"
                    id="apl"
                    value={"true"}
                    onChange={handleInputChangeForm1}
                  />
                </label>
                <label>
                  non
                  <input
                    type="radio"
                    name="apl"
                    id="apl"
                    value={"false"}
                    onChange={handleInputChangeForm1}
                  />
                </label>
              </div>
            </fieldset>
            <button type="submit">Validation</button>
          </form>
        </li>
        <hr />
        <li>
          <form>
            <fieldset>
              <legend>Le demandeur</legend>
              <div>
                <label htmlFor="yourAge">
                  Quel est votre age ?
                  <input type="number" min="20" name="yourAge" id="yourAge" />
                </label>
              </div>
              <div>
                <span>Êtes-vous invalide ?</span>
                <label htmlFor="invalidite">
                  oui
                  <input type="radio" name="invalidite" id="invalidite" />
                </label>
                <label htmlFor="">
                  non
                  <input type="radio" name="invalidite" id="invalidite" />
                </label>
              </div>
              <div>
                <span>Quel est votre taux d'invalidité ?</span>
                <label htmlFor="applicant_disability_rate">
                  inferieur à 80%
                  <input
                    type="radio"
                    name="applicant_disability_rate"
                    id="applicant_disability_rate"
                    value="0.7"
                  />
                </label>
                <label htmlFor="">
                  Superieur ou égale à 80%
                  <input
                    type="radio"
                    name="applicant_disability_rate"
                    id="applicant_disability_rate"
                    value="0.8"
                  />
                </label>
                {/* <details>
                  <summary>Rentrez votre taux d'invalidité</summary>
                  <p>0%, 50%, 60%, 70%, 80%, 100%</p>
                  <p>
                    Les valeurs inferieur à 50% ne seront pas prise en compte
                    hormis le 0
                  </p>
                </details>

                <input
                  required
                  type="range"
                  list="mineDisability"
                  step="0.1"
                  min="0"
                  max="1"
                  value={rangeValue}
                  onInput={handleInputChangeForm1}
                  name="mineDisability"
                />
                <datalist id="mineDisability">
                  <option value="0" label="0%" />
                  <option value="0.1" label="10%" />
                  <option value="0.2" label="20%" />
                  <option value="0.3" label="30%" />
                  <option value="0.4" label="40%" />
                  <option value="0.5" label="50%" />
                  <option value="0.60" label="60%" />
                  <option value="0.70" label="70%" />
                  <option value="0.80" label="80%" />
                  <option value="1" label="100%" />
                </datalist>
                <output id="mineDisability" name="mineDisability">
                  {rangeValue}%
                </output> */}
              </div>
              <div>
                <label htmlFor="mineIncome">
                  Vos revenus issue du salariat de {date - 2} ?
                  <input
                    type="number"
                    name="mineIncome"
                    id="mineIncome"
                    placeholder="Net imposable"
                  />
                </label>
              </div>
              <div>
                <label htmlFor="mineOtherIncome">
                  Vos revenus de {date - 2} hors activité du salariat ?
                  <input
                    type="number"
                    name="mineOtherIncome"
                    id="mineOtherIncome"
                    placeholder="autres revenus"
                  />
                </label>
              </div>
            </fieldset>
            <button type="submit">Validation</button>
          </form>
        </li>
        <hr />
        {/* TODO condition si conjoint */}
        <li>
          <form>
            <fieldset>
              <legend> Le(a) conjoint(e)</legend>
              <div>
                <label htmlFor="consort">
                  Son age
                  <input type="number" id="consort" name="consort" min="18" />
                </label>
              </div>
              <div>
                <span>Est elle en invalidité ?</span>
                <label htmlFor="consortDisability">
                  oui
                  <input
                    type="radio"
                    name="consortDisability"
                    id="consortDisability"
                  />
                </label>
                <label htmlFor="consortDisability">
                  non
                  <input
                    type="radio"
                    name="consortDisability"
                    id="consortDisability"
                  />
                </label>
              </div>
              <div>
                <label htmlFor="tauxConsortDisability">
                  Quel est son taux d'invalidité ?{/* TODO mettre max et min */}
                  <input
                    max="100"
                    type="number"
                    name="tauxConsortDisability"
                    id="tauxConsortDisability"
                    placeholder="taux invalidant"
                  />
                  %
                </label>
              </div>
              <div>
                <label htmlFor="consortIncome">
                  Ses revenus issue du salariat de {date - 2} ?
                  <input
                    type="number"
                    name="consortIncome"
                    id="consortIncome"
                    placeholder="Net imposable"
                  />
                </label>
              </div>
              <div>
                <label htmlFor="consortOtherIncome">
                  Ses revenus de {date - 2} hors activité du salariat ?
                  <input
                    type="number"
                    name="consortOtherIncome"
                    id="consortOtherIncome"
                    placeholder="autres revenus"
                  />
                </label>
              </div>
            </fieldset>
            <button type="submit">Validation</button>
          </form>
        </li>
        <hr />
        <li>
          <form>
            <fieldset>
              <legend>Enfant(s) ou personne(s) à charges</legend>
              <div>
                <span>Avez-vous des enfants ou des personnes à charges ?</span>
                <label htmlFor="otherPeople">
                  oui
                  <input type="radio" name="otherPeople" id="otherPeople" />
                </label>
                <label htmlFor="">
                  non
                  <input type="radio" name="otherPeople" id="otherPeople" />
                </label>
              </div>
              <div>
                <label htmlFor="peopleOnCharge">
                  Combien d'enfants ou de personnes à charges avez-vous?
                  <input type="number" name="peopleOnCharge" id="" min="1" />
                </label>
              </div>
              <div>
                <span>Travail t-elle ?</span>
                <label htmlFor="peopleOnWork">
                  oui
                  <input type="radio" name="peopleOnWork" />
                </label>
                <label htmlFor="consortDisability">
                  non
                  <input type="radio" name="peopleOnWork" />
                </label>
              </div>
              <div>
                <label htmlFor="">
                  Son salaire de {date - 2}?
                  <input
                    type="number"
                    name=""
                    id=""
                    min="1"
                    placeholder="net imposable"
                  />
                </label>
              </div>
            </fieldset>
            <button type="submit">Validation</button>
          </form>
        </li>
      </ul>
    </div>
  );
};

Question.proptypes = {
  nbrChild: Proptypes.number.isRequired
};
export default Question;
