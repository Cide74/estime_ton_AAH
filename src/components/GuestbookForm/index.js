import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import TextareaAutosize from "@mui/material/TextareaAutosize";

import "./style.scss";

/**
 *
 * @param {string} title - titre du message dans le livre d'or
 * @param {string} content - Contenu du message dans le livre d'or
 * @param {boolean} success - Réponse de la de la BDD
 * @param {string} message - message de la BDD
 * @param {func} changeFieldGuestbook - création d'un Guestbook
 * @param {func} sendGuestbookForm - déclencheur du formulaire
 * @param {func} clearGuestbook - purifie le formulaire
 * @returns JSX component
 */
const GuestbookForm = ({
  title,
  content,
  changeFieldGuestbook,
  sendGuestbookForm,
  clearGuestbook,
  success,
  message,
}) => {
  const [isValue, setIsValue] = useState(false);

  const navigate = useNavigate();

  const handleSubmitForm = (evt) => {
    evt.preventDefault();
    setIsValue(true);
    sendGuestbookForm();
  };

  const handleInputChange = (evt) => {
    const value = evt.target.value;
    const name = evt.target.name;
    changeFieldGuestbook(name, value);
  };

  useEffect(() => {
    let time;
    if (success && isValue) {
      console.log("success", success);
      time = setTimeout(() => {
        setIsValue(false);
        clearGuestbook();
        navigate("/");
      }, 3000);
    }
    return () => clearTimeout(time);
  });

  return (
    <div className="home__body">
      <div className="home__body__title">
        <h2 className="paragraphe__title">
          Ecrire un message dans le livre d'or.
        </h2>

        <div className="content_card">
          <div className="cardChiffre__paragraphe content_form">
            <Box
              component="form"
              onSubmit={handleSubmitForm}
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <div>
                {/* Dans les composant de Mui, ne pas mettre d'attribut value, car la valeur passe par onChange */}
                <TextField
                  required
                  autoFocus
                  label="Titre"
                  name="title"
                  id="title"
                  onChange={handleInputChange}
                  sx={{ m: 1, width: "25ch" }}
                  helperText="Le titre de l'article du Guestbook"
                />
              </div>
              <div>
                <TextareaAutosize
                  required
                  label="Votre texte"
                  name="content"
                  id="content"
                  minRows={5}
                  maxRows={10}
                  onChange={handleInputChange}
                  style={{ width: 570, height: 320 }}
                  placeholder="Le contenu de l'article du Guestbook"
                />
              </div>
              <button type="submit">Envoyer</button>
              {success && isValue ? (
                <div className="confirm">
                  {" "}
                  <p>{message}</p>
                </div>
              ) : null}
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
};

GuestbookForm.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  success: PropTypes.bool,
  message: PropTypes.string,
  changeFieldGuestbook: PropTypes.func.isRequired,
  sendGuestbookForm: PropTypes.func.isRequired,
  clearGuestbook: PropTypes.func,
};
GuestbookForm.defaultProps = {
  title: "",
  content: "",
};
export default GuestbookForm;
