import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import {
  APIPresta,
  APIPersACharge,
  APIPersCouple,
  aahMontant,
  majorationPlafondCouple,
  coefPersonneACharge,
  smichb,
  smicnbtf,
  mva,
  ageMinimal,
  ageRetraite,
  tauxInvalidite,
  tauxInvaliditeMinimum
} from "src/API/APIext.js";
import axios from "axios";

import "./style.scss";

const Calculateur = () => {
  const [prestaMessage, setPrestaMessage] = useState("");
  const [prestaDataValue, setPrestaDataValue] = useState("");
  const [prestaDataKey, setPrestaDataKey] = useState("");
  const [results, setResults] = useState(null);
  const [inputValues, setInputValues] = useState({
    salaire: "",
    salaireConjoint: ""
  });

  const handleOnCalcul = prop => evt => {
    setInputValues({
      ...inputValues,
      [prop]: evt.target.value
    });
  };

  const handleSubmitform = evt => {
    evt.preventDefault();

    setResults(
      Number(inputValues.salaire) + Number(inputValues.salaireConjoint)
    );
  };

  /**
   * @param {string} englishDate - format de date en anglais yyyy-mm-dd
   * @returns string
   */
  function dateTransform(englishDate) {
    const enDate = englishDate[0].split("-");
    const [year, month, day] = enDate;
    return [day, month, year].join("-");
  }

  useEffect(() => {
    axios
      .get(APIPresta)
      .then(data => {
        const objprestaDataValues = Object.values(data.data.values);
        const objprestaDataKeys = Object.keys(data.data.values);
        console.log(data.data.description);
        const frDate = dateTransform(objprestaDataKeys);
        // console.log(frDate.join("-"));
        setPrestaMessage(data.data.description);
        setPrestaDataValue(objprestaDataValues[0]);
        setPrestaDataKey(frDate);
      })
      .catch(error => {
        console.trace(error);
      });
  }, []);

  return (
    <div className="Calculator">
      <div className="Calculator__base">
        <h2>Calculateur AHH</h2>

        <div className="Calculator__Section">
          <Box component="form" onSubmit={handleSubmitform}>
            <div className="Calculator__bloc__amt">
              <p>
                {prestaMessage} datant du {prestaDataKey} :
              </p>
              <p>
                <strong>{prestaDataValue} €</strong>
              </p>
            </div>
            <div className="Calculator__bloc">
              <TextField
                required
                autoFocus
                label="votre salaire"
                type="number"
                name="salaire"
                id="salaire"
                onChange={handleOnCalcul("salaire")}
                variant="outlined"
                helperText="Entrer votre salaire"
              />
            </div>

            <div className="Calculator__bloc">
              <TextField
                helperText="Entrer le salaire de votre conjoint(e)"
                type="number"
                name="salaireConjoint"
                id="salaireConjoint"
                label="salaire conjoint(e)"
                variant="outlined"
                onChange={handleOnCalcul("salaireConjoint")}
              />
            </div>
            <div className="Calculator__btn">
              <button type="submit">Calculer</button>
            </div>
          </Box>

          <div className="Calculator__result">
            <p>
              <strong> {results ? results : "Le resultat ici"} €</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculateur;
