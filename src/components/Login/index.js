import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
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
 * @param {string} email - Email de l'utilisateur
 * @param {string} password - Mot de passe de l'utilisateur
 * @param {bool} islogged - valeur false par defaut
 * @param {function} fieldChange - Données de l'input
 * @param {function} onSubscibeLogin - déclanche l'envoi du formulaire
 * @param {function} refreshHeader - Déclanche l'action pour la mise a jour du composant
 * @returns {Component} Login
 */

const Login = ({ pseudo, password, fieldChange, onLogin, refreshHeader }) => {
  const [myPseudo, setMyPseudo] = useState("");
  const [validation, setValidation] = useState("");
  const accueil = useHistory();

  // valeurs des compo Mui
  const [values, setValues] = useState({
    weight: "",
    weightRange: "",
    showPassword: false
  });
  // visibilité du MDP
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword
    });
  };
  // arrete le comportement de l'icone
  const handleMouseDownPassword = event => {
    event.preventDefault();
  };
  // fin des valeurs de Mui

  const handleOnSubmit = evt => {
    evt.preventDefault();
    onLogin();
    refreshHeader();
    setValidation("Vous êtes bien connecté");
  };

  const handleInputChange = evt => {
    const inputName = evt.target.name;
    const value = evt.target.value;
    if (evt.target.name === pseudo) {
      setMyPseudo(evt.target.value);
      console.log("my pseudo est :", myPseudo);
    }
    fieldChange(inputName, value);
  };

  useEffect(() => {
    let timeout;

    timeout = setTimeout(() => {
      setMyPseudo("");
      setValidation("");
      if (validation) {
        accueil.push("/");
      }
    }, 2500);

    return () => clearTimeout(timeout);
  });

  return (
    <div>
      <Box
        component="form"
        onSubmit={handleOnSubmit}
        sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        <div>
          <TextField
            required
            autoFocus
            autoComplete="pseudo"
            label="Pseudo"
            name="pseudo"
            id="pseudo"
            onChange={handleInputChange}
            sx={{ m: 1, width: "25ch" }}
            helperText="Votre pseudo"
          />
          <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
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
        <button type="submit">Connexion</button>
      </Box>

      <div>
        <p>Si vous n'avez pas de compte, </p>{" "}
        <Link to="/signup">incrivez-vous</Link>
      </div>
      {validation && <div>{validation}</div>}
    </div>
  );
};

Login.proptypes = {
  email: Proptypes.string.isRequired,
  password: Proptypes.string.isRequired,
  fieldChange: Proptypes.func.isRequired,
  onSubcribeLogin: Proptypes.func.isRequired,
  refreshHeader: Proptypes.func.isRequired
};
export default Login;
