import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useHistory } from "react-router-dom";
import "./style.scss";

/**
 *
 * @param {string} title - titre du message dans le livre d'or
 * @param {string} content - Contenu du message dans le livre d'or
 * @param {boolean} success - Reponse à la requete de la BDD
 * @param {string} message - message de la BDD
 * @param {func} changeFieldGuestbook - creation d'un Guestbook
 * @param {func} sendGuestbookForm - déclancheur du formulaire
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
  getGuestbook
}) => {
  const [isValue, setIsValue] = useState(false);

  const goToPage = useHistory();

  const handleSubmitForm = (evt) => {
    evt.preventDefault();
    sendGuestbookForm();
    setIsValue(true);
  };

  const handleInputChange = (evt) => {
    const value = evt.target.value;
    const name = evt.target.name;
    changeFieldGuestbook(name, value);
  };
  
  useEffect(() => {
    let time;
    if (success && isValue) {
      console.log("j'ai bien créé un message dans le livre d'or");
      time = setTimeout(() => {
        setIsValue(false);
        clearGuestbook();
        goToPage.push("/");
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
        <div className="cardChiffre">
          <div className="cardChiffre__paragraphe">

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
                <TextField
                  required
                  autoFocus
                  label="Titre"
                  name="title"
                  id="title"
                  value={title}
                  onChange={handleInputChange}
                  sx={{ m: 1, width: "25ch" }}
                  helperText="Le titre de l'article du Guestbook"
                />

              </div>
              <div>
                <TextField
                  required
                  multiline
                  label="Votre texte"
                  name="content"
                  id="content"
                  rows={5}
                  value={content}
                  onChange={handleInputChange}
                  sx={{ m: 1, width: "25ch" }}
                  helperText="Le contenu de l'article du Guestbook"
                />
              </div>
              <button type="submit">Envoyer</button>
            </Box>

            {success && isValue ? (
              <div className="confirm2">
                {" "}
                <p>{message}</p>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

GuestbookForm.proptypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  success: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  changeFieldGuestbook: PropTypes.func.isRequired,
  sendGuestbookForm: PropTypes.func.isRequired,
  clearGuestbook: PropTypes.func.isRequired,
};
export default GuestbookForm;
