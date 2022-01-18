import React, { useEffect, useState } from "react";
import Proptypes from "prop-types";
import { useNavigate } from "react-router";
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
 * @param {string} password - le mot de passe
 * @param {string} passwordConf - la confirmation de mot de passe
 * @param {string} message - la confirmation du fait que l'utilisateur à bien créé son compte
 * @param {function} onSubscibe - déclenche l'envoi du formulaire
 * @param {function} fieldChange - Données de l'input
 * @param {function} clearBackValue - nettoie les valeurs de retour de message et success
 * @param {function} clearInput - nettoie les champs après validation
 * @returns jsx component
 */

const Signup = ({
  password,
  passwordConf,
  onSubscribe,
  fieldChange,
  message,
  clearInput,
  clearBackValue,
}) => {
  const navigate = useNavigate();

  const [validation, setValidation] = useState("");
  const [passwordOk, setPasswordOk] = useState("");
  /**
   *
   * @param {string} values mot de passe utilisateur
   * @returns une chaine de caratère contenant pas les valeurs requises
   */
  const checkValuesPassword = (values) => {
    let mdpWarning = "le mot de passe doit contenir au moins : \n";
    // console.log(mdpWarning.length);
    if (/^(?=[a-zàéèç])/.test(values)) {
      // au moins une minuscule
      mdpWarning += "\n- un caractère minuscule";
    }
    if (!/^(?=.*[A-Z])/.test(values)) {
      // au moins une majuscule
      mdpWarning += "\n- un caractère majuscule,";
    }
    if (!/^(?=.*\d)/.test(values)) {
      // au moins 1 chiffre
      mdpWarning += "\n- un caractère de type nombre,";
    }
    if (!/^(?=.*[$@$!#%^&*?_])/.test(values)) {
      // au moins un de ces caractères
      mdpWarning += "\n- un caractère spécial : $ @ ! #  % ^ & * ? _";
    }
    if (!/^(?=.{7,25})/.test(values)) {
      // au moins 8 carcteres
      mdpWarning += "\n- minimum 8 caractères et maximum 25.";
    }
    if (mdpWarning.length >= 43) {
      return mdpWarning;
    } else {
      mdpWarning = "";
      return mdpWarning;
    }
  };

  const handleOnSubmitSubcribe = (evt) => {
    evt.preventDefault();
    const mdpasse = evt.target.password.value;
    const errorMDP = checkValuesPassword(mdpasse);

    if (mdpasse === evt.target.passwordConf.value) {
      if (errorMDP.length < 1) {
        onSubscribe();
      } else {
        setPasswordOk(errorMDP);
      }
    } else {
      setPasswordOk(
        "Le mot de passe et sa confirmation doivent être identiques !"
      );
    }
  };

  const handleInputChange = (evt) => {
    const value = evt.target.value;
    const inputName = evt.target.name;
    fieldChange(inputName, value);
  };
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
  // arrête le comportement de l'icone
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    let timeout;
    if (validation || passwordOk) {
      clearBackValue();
      timeout = setTimeout(() => {
        setValidation("");
        setPasswordOk("");
        clearInput();
        if (validation) {
          navigate("/");
        }
      }, 3000);
    }
    setValidation(message);

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
                          {values.showPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
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
                          {values.showPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
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
            {validation ? (
              <div className="confirm">{validation}</div>
            ) : (
              <div style={{ color: "red" }}>{passwordOk}</div>
            )}
          </Box>
        </div>
      </div>
    </div>
  );
};

Signup.propTypes = {
  password: Proptypes.string.isRequired,
  passwordConf: Proptypes.string.isRequired,
  fieldChange: Proptypes.func.isRequired,
  onSubcribe: Proptypes.func.isRequired,
  clearInput: Proptypes.func.isRequired,
  clearBackValue: Proptypes.func.isRequired,
};
Signup.defaultProps = {
  pseudo: "",
  password: "",
};
export default Signup;
