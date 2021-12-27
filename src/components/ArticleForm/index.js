import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useHistory } from "react-router-dom";
import "./style.scss";

/**
 * @param {string} title - titre de l'article
 * @param {string} content - Contenu de l'article
 * @param {boolean} success - Reponse à la requete de la BDD
 * @param {string} message - message de la BDD
 * @param {func} changeFieldArticle - creation d'un article
 * @param {func} sendArticleForm - déclancheur du formulaire
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

  const accueil = useHistory();

  const handleSubmitForm = (evt) => {
    evt.preventDefault();
    sendArticleForm();
    setIsValue(true);
  };

  const handleInputChange = (evt) => {
    const value = evt.target.value;
    const name = evt.target.name;
    // console.log(name, " ", value);
    changeFieldArticle(name, value);
  };

  useEffect(() => {
    let time;
    // console.log(`success ${success} et isValue ${isValue}`);
    if (success && isValue) {
      console.log("j'ai bien créé l'article");
      time = setTimeout(() => {
        setIsValue(false);
        clearArticle();
        accueil.push("/");
      }, 3000);
    }
    return () => clearTimeout(time);
  });

  return (
    <div className="home__body">
      <div className="home__body__title">
        <div className="cardChiffre">
          <div className="cardChiffre__title"></div>
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
                  helperText="Le titre de l'article"
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
                  helperText="Le contenu de l'article"
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

ArticleForm.proptypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  success: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  changeFieldArticle: PropTypes.func.isRequired,
  sendArticleForm: PropTypes.func.isRequired,
  clearArticle: PropTypes.func.isRequired,
};
ArticleForm.defaultProps = {
  title: "",
  content: "",
};
export default ArticleForm;
