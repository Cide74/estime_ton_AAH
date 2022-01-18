import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Proptypes from "prop-types";
import Box from "@mui/material/Box"; // <form></form>
import TextField from "@mui/material/TextField"; // <input/>
import OutlinedInput from "@mui/material/OutlinedInput"; // <input /> sans effet de label
import InputLabel from "@mui/material/InputLabel"; // label pour le OutlinedInput
import FormHelperText from "@mui/material/FormHelperText"; // <label></label> en + visible
import FormControl from "@mui/material/FormControl"; // Donne le style du form
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import "./style.scss";

/**
 * @param {string} pseudo - Pseudo de l'utilisateur
 * @param {string} password - Mot de passe de l'utilisateur
 * @param {string} message - message de confirmation au login
 * @param {string} errorMsg - message d'erreur en cas échec du login
 * @param {bool} islogged - Valeur false par défaut
 * @param {function} fieldChange - Données de l'input
 * @param {function} onLogin - Déclenche l'envoi du formulaire
 * @param {function} clearBackValue - nettoie les valeurs de retour de message et success
 * @param {function} clearInput - Déclenche l'action pour la mise à jour du composant
 * @returns  JSX component
 */

const Login = ({
  pseudo,
  password,
  onLogin,
  isLogged,
  fieldChange,
  clearInput,
  message,
  errorMsg,
  clearBackValue,
}) => {
  const [sendForm, setSendForm] = useState(false);
  const [validation, setValidation] = useState("");
  const navigate = useNavigate();

  // valeurs des compo Mui
  const [values, setValues] = useState({
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  // visibilité du MDP
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };
  // arrète le comportement de l'icône
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  // fin des valeurs de Mui

  const handleOnSubmit = (evt) => {
    evt.preventDefault();
    setSendForm(true);
    onLogin();
    clearInput();
  };

  const handleInputChange = (evt) => {
    const inputName = evt.target.name;
    const value = evt.target.value;

    fieldChange(inputName, value);
  };
  // TODO placé le cycle clearBackValue
  useEffect(() => {
    setValidation("");
    let timeout;
    if (isLogged && pseudo) {
      setValidation(message);
      timeout = setTimeout(() => {
        setValidation("");
        setSendForm(false);
        clearBackValue();
        if (validation && isLogged) {
          navigate("/");
        }
      }, 2000);
      return () => clearTimeout(timeout);
    }
    if (!isLogged && sendForm) {
      setValidation(errorMsg);
      timeout = setTimeout(() => {
        setValidation("");
        setSendForm(false);
        clearBackValue();
      }, 2000);
      return () => {
        setValidation("");
        clearTimeout(timeout);
      };
    }
  }, [isLogged, errorMsg, handleOnSubmit]);

  return (
    <div className="home__body">
      <div className="home__body__title">
        <h2>Connectez-vous pour continuer</h2>
        <Box
          component="form"
          onSubmit={handleOnSubmit}
          sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
        >
          <div className="body__in__card">
            <TextField
              required
              autoFocus
              autoComplete="pseudo"
              label="Pseudo"
              name="pseudo"
              id="pseudo"
              className="body__in__card__text"
              onChange={handleInputChange}
              sx={{ m: 1, width: "25ch" }}
              helperText="Votre pseudo"
            />
            <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Mot de passe
              </InputLabel>
              <OutlinedInput
                required
                id="password"
                name="password"
                type={values.showPassword ? "text" : "password"}
                value={password}
                onChange={handleInputChange}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
              <FormHelperText id="outlined-weight-helper-text">
                Votre mot de passe
              </FormHelperText>
            </FormControl>
          </div>
          {isLogged === false ? (
            <button type="submit">Connexion</button>
          ) : (
            <button type="button">Déconnexion</button>
          )}
        </Box>
        <div>
          <p>Si vous n'avez pas de compte, </p>{" "}
          <Link to="/signup">
            <button type="submit">Inscrivez-vous</button>
          </Link>
        </div>
        {sendForm ? <div className="confirm2">{validation}</div> : null}
      </div>
    </div>
  );
};

Login.proptypes = {
  email: Proptypes.string.isRequired,
  password: Proptypes.string.isRequired,
  message: Proptypes.string.isRequired,
  errorMsg: Proptypes.string,
  fieldChange: Proptypes.func.isRequired,
  onLogin: Proptypes.func.isRequired,
  clearInput: Proptypes.func.isRequired,
  clearBackValue: Proptypes.func.isRequired,
};
Login.defaultProp = {
  password: "",
  pseudo: "",
  message: "",
  errorMsg: "",
};
export default Login;
