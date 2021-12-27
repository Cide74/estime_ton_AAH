import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
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

  const goToAccueil = useHistory();

  const handleSubmitForm = (evt) => {
    evt.preventDefault();
    sendArticleForm();
    setIsValue(true);
  };

  const handleInputChange = (evt) => {
    const value = evt.target.value;
    const name = evt.target.name;
    console.log(name, " ", value);
    changeFieldArticle(name, value);
  };

  useEffect(() => {
    let time;
    if (success && isValue) {
      console.log("j'ai bien créé l'article");
      time = setTimeout(() => {
        setIsValue(false);
        clearArticle();
        goToAccueil.push("/");
      }, 3000);
    }
    return () => clearTimeout(time);
  });
  return (
    <div>
      <div>
        <div className="cardChiffre">
          <div className="cardChiffre__title"></div>
          <div className="cardChiffre__paragraphe">
            <form onSubmit={handleSubmitForm}>
              <legend>Rédiger un article</legend>
              <label htmlFor="title">
                Titre de l'article
                <input
                  placeholder="Titre de l'article"
                  name="title"
                  autoFocus
                  required
                  value={title}
                  onChange={handleInputChange}
                />
              </label>
              <label></label>
              <textarea
                placeholder="Votre article"
                required
                cols="40"
                rows="20"
                id="content"
                name="content"
                value={content}
                onChange={handleInputChange}
              ></textarea>
              <button type="submit">Envoyer</button>
            </form>
            {success && isValue ? (
              <div className="confirm">
                <p>{message}</p>
              </div>
            ) : null}
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
