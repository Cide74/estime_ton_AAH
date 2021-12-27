import React, { useState } from "react";
import PropTypes from "prop-types";
import "./style.scss";

/**
 *
 * @param {string} pseudo - Pseudo de l'utilisateur
 * @param {string} email - Email de l'utilisateur
 * @param {number} birthdate - Date de naissance de l'utilisateur
 * @param {booleen} place_of_residence - Date de naissance de l'utilisateur
 * @returns JSX element
 *
 */
const MyPage = ({ pseudo, email, birthdate, place_of_residence }) => {
  const [inFrance, setInFrance] = useState("");
  if (inFrance === "") {
    setInFrance("Vous devez vous connecter ou bien remplir le formulaire");
  } else {
    if (place_of_residence) {
      setInFrance("Je réside en France");
    } else {
      setInFrance("Je réside à l'étranger");
    }
  }

  return (
    <div>
      <h2>Mes Informations personnel</h2>
      <ul>
        <li>Mon pseudo : {pseudo}</li>
        <li>Mon Email : {email}</li>
        <li>Ma date de naissance : {birthdate}</li>
        <li>{inFrance}</li>
      </ul>
    </div>
  );
};
MyPage.proptypes = {
  pseudo: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  birthdate: PropTypes.string.isRequired,
  place_of_residence: PropTypes.bool.isRequired
};
export default MyPage;
