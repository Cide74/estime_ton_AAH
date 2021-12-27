import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import "./style.scss";

/**
 *
 * @param {string} title - titre du message dans le livre d'or
 * @param {string} content - Contenu du message dans le livre d'or
 * @param {boolean} success - Reponse à la requete de la BDD
 * @param {string} message - message de la BDD
 * @param {func} changeFieldComment - creation d'un Comment
 * @param {func} sendCommentForm - déclancheur du formulaire
 * @param {func} clearComment - purifie le formulaire
 * @returns JSX component
 */
const CommentForm = ({
  title,
  content,
  changeFieldComment,
  sendCommentForm,
  clearComment,
  success,
  message
}) => {
  const [isValue, setIsValue] = useState(false);

  const goToAccueil = useHistory();

  const handleSubmitForm = evt => {
    evt.preventDefault();
    sendCommentForm();
    setIsValue(true);
  };

  const handleInputChange = evt => {
    const value = evt.target.value;
    const name = evt.target.name;
    changeFieldComment(name, value);
  };

  useEffect(() => {
    let time;
    if (success && isValue) {
      console.log("j'ai bien créé un message dans le livre d'or");
      time = setTimeout(() => {
        setIsValue(false);
        clearComment();
        goToAccueil.push("/");
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
              <form onSubmit={handleSubmitForm}>
              <legend>
                Ecrire un message dans le livre d'or
              </legend>
              <label htmlFor="title">
                Titre du message dans le livre d'or
          <input
            placeholder="Titre du message dans le livre d'or"
            name="title"
            autoFocus
            required
            value={title}
            onChange={handleInputChange}
          />
        </label>
        <label></label>
        <textarea
          placeholder="Votre message dans le livre d'or"
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

CommentForm.proptypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  success: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  changeFieldComment: PropTypes.func.isRequired,
  sendCommentForm: PropTypes.func.isRequired,
  clearComment: PropTypes.func.isRequired
};
export default CommentForm;
