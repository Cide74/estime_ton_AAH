import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import TextareaAutosize from "@mui/material/TextareaAutosize";

import "./style.scss";

/**
 * @param {string} title - titre de l'article
 * @param {string} content - Contenu de l'article
 * @param {boolean} success - Réponse à la requete de la BDD
 * @param {string} message - message de la BDD
 * @param {func} changeFieldArticle - création d'un article
 * @param {func} sendArticleForm - déclencheur du formulaire
 * @param {func} clearArticle - purifie le formulaire
 * @returns JSX component
 */
const ArticleForm = ({
  title,
  content,
  changeFieldArticle,
  sendArticleForm,
  clearArticle,
  success,
  message,
}) => {
  const [isValue, setIsValue] = useState(false);

  const navigate = useNavigate();

  const handleSubmitForm = (evt) => {
    evt.preventDefault();
    sendArticleForm();
    setIsValue(true);
  };

  const handleInputChange = (evt) => {
    const value = evt.target.value;
    const name = evt.target.name;
    changeFieldArticle(name, value);
  };

  useEffect(() => {
    let time;
    if (success && isValue) {
      time = setTimeout(() => {
        setIsValue(false);
        clearArticle();
        navigate("/");
      }, 3000);
    }
    return () => clearTimeout(time);
  });

  return (
    <div className="home__body">
      <div className="home__body__title">
        <div className="content_card">
          <div className="cardChiffre__title"></div>
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
                <TextField
                  required
                  autoFocus
                  label="Titre"
                  name="title"
                  id="title"
                  onChange={handleInputChange}
                  sx={{ m: 1.5, width: "25ch" }}
                  helperText="Le titre de l'article"
                />
              </div>
              <div>
                <TextareaAutosize
                  required
                  label="Votre texte"
                  name="content"
                  id="content"
                  minRows={5}
                  cols={10}
                  onChange={handleInputChange}
                  style={{ width: 570, height: 320 }}
                  placeholder="Le contenu de l'article"
                />
              </div>
              <button type="submit">Envoyer</button>
              {success && isValue ? (
                <div className="confirm">
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

ArticleForm.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  success: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  changeFieldArticle: PropTypes.func.isRequired,
  sendArticleForm: PropTypes.func.isRequired,
  clearArticle: PropTypes.func,
};
ArticleForm.defaultProps = {
  title: "",
  content: "",
};
export default ArticleForm;
