import React, { useEffect, useState } from "react";
import Proptypes from "prop-types";
import { useHistory } from "react-router";
import Box from "@mui/material/Box"; // <form></form>
import TextField from "@mui/material/TextField"; // <input/>
import FormControl from "@mui/material/FormControl"; // Donne le style du form
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormHelperText from "@mui/material/FormHelperText";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import "./style.scss";

/**
 *
 * @param {string} password - le mot de passe
 * @param {string} passwordConf - la confirmation de mot de passe
 * @param {function} onSubscibe - déclanche l'envoi du formulaire
 * @param {function} fieldChange - Données de l'input
 *
 * @returns jsx component
 */

const Signup = ({ password, passwordConf, onSubscribe, fieldChange }) => {
  const accueil = useHistory();
  const [validation, setValidation] = useState("");
  const [passwordOk, setPasswordOk] = useState("");

  const handleOnSubmitSubcribe = evt => {
    evt.preventDefault();
    if (evt.target.password.value.length >= 8) {
      if (evt.target.password.value === evt.target.passwordConf.value) {
        onSubscribe();
        setValidation("Inscription réussie");
      } else {
        setPasswordOk(
          "Le mot de passe et sa confirmation doivent être identique !"
        );
      }
    } else {
      setPasswordOk("Le mot de passe doit faire 8 caractères ou plus");
    }
  };
  const handleInputChange = evt => {
    const value = evt.target.value;
    const inputName = evt.target.name;
    fieldChange(inputName, value);
  };
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

  useEffect(() => {
    let timeout;
    if (validation || passwordOk) {
      timeout = setTimeout(() => {
        setValidation("");
        setPasswordOk("");
        if (validation) {
          accueil.push("/");
        }
      }, 3000);
    }
    return () => clearTimeout(timeout);
  });

  return (
    <div className="home__body">
      <div className="home__body__title">
        <div className="signup">
          <h2>Inscription au site</h2>
          <Box
            component="form"
            onSubmit={handleOnSubmitSubcribe}
            sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
          >
            <div className="signup__out-inputs">
            <div className="signup__out-inputs__in">
              <TextField
                required
                autoFocus
                autoComplete="pseudo"
                label="pseudo"
                name="pseudo"
                id="pseudo"
                onChange={handleInputChange}
                sx={{ m: 1, width: "25ch" }}
                helperText="Votre Pseudo"
                autoComplete="on"
              />
            </div>

            <div className="signup__out-inputs__in">
              <TextField
                required
                type="email"
                name="email"
                id="email"
                label="email"
                onChange={handleInputChange}
                sx={{ m: 1, width: "25ch" }}
                helperText="Votre email"
                autoComplete="on"
              />
            </div>
            <div className="signup__out-inputs__in">
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
                
            <div className="signup__out-inputs__in">
              <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">
                  Mot de passe
                </InputLabel>
                <OutlinedInput
                  required
                  id="passwordConf"
                  name="passwordConf"
                  type={values.showPassword ? "text" : "password"}
                  value={passwordConf}
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
                  Confirmez votre mot de passe
                </FormHelperText>
              </FormControl>
            </div>
                </div>
            <button type="submit">Inscription</button>
            {validation ? <div>{validation}</div> : <div>{passwordOk}</div>}
          </Box>
        </div></div></div>
  );
};

Signup.proptypes = {
  password: Proptypes.string.isRequired,
  passwordConf: Proptypes.string.isRequired,
  fieldChange: Proptypes.func.isRequired,
  onSubcribe: Proptypes.func.isRequired
};

export default Signup;
