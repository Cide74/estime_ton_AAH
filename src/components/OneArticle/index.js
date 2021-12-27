import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import ArticleForm from "../ArticleForm";
import Loading from "src/components/Loading";
import { properNoun, dateUndefind } from "src/assets/datas/fonction";

import "./style.scss";

/**
 * @param {number} id - id de l'article
 * @param {string} title - titre de l'article
 * @param {string} content - contenu de l'article
 * @param {string} pseudo - Pseudo de l'utilisateur
 * @param {boolean} success - Reponse à la requete de la BDD
 * @param {string} message - message de la BDD
 * @param {objet} user - Informations de l'auteur
 * @param {function} deleteOneArticle - Suppression d'un article
 * @param {function} modifyOneArticle - Modification d'un article
 * @returns JSX component
 */
const OneArticle = ({
  id,
  title,
  content,
  user,
  pseudo,
  clearArticle,
  success,
  message,
  updated_at,
  deleteOneArticle,
  modifyOneArticle,
  changeFieldArticle,
}) => {
  const [modify, setModify] = useState(false);
  const [isValue, setIsValue] = useState(false);
  const [loadData, setLoadData] = useState(false);

  const goToMyPage = useHistory();

  const handleDeleteOneArticle = () => {
    deleteOneArticle(id);
    setIsValue(true);
  };

  const handleModalModifyOneArticle = () => {
    console.log("je veux modifier un article");
    if (!modify) {
      setModify(true);
    } else {
      setModify(false);
    }
  };

  const getModifyArticle = () => {
    modifyOneArticle(id);
    setIsValue(true);
  };
  // TODO corriger le double rafraichissement, ce qui empeche le rendu correct de la page.
  // redirection après suppression valide ou modification
  useEffect(() => {
    let time;
    if (success && isValue) {
      console.log(`success ${success} et message ${message}`);
      time = setTimeout(() => {
        goToMyPage.push("/userPage");
        setIsValue(false);
        clearArticle();
      }, 3000);
      return () => clearTimeout(time);
    }
  });

  // affiche les données apres les avoir recu de la BDD
  useEffect(() => {
    if (!title) {
      setLoadData(false);
      return <Loading />;
    } else {
      setLoadData(true);
    }
  }, [title]);

  return (
    <section className="home__body">
      {loadData && (
        <div className="home__body__title">
          <div className="cardChiffre" key={id}>
            <h3 className="cardChiffre__title">{properNoun(title)}</h3>
            <div className="cardGuestbook__footer">
              <div className="cardGuestbook__footer__in">
                {pseudo}, le {dateUndefind(updated_at)}
              </div>
            </div>
            <div className="cardChiffre__paragraphe">
              <p className="cardChiffre__title2-sous-liste">
                - {properNoun(content)}
              </p>
              {pseudo && (
                <div className="btn">
                  <button onClick={handleModalModifyOneArticle}>
                    Modifier
                  </button>
                  {modify && (
                    <ArticleForm
                      title={title}
                      content={content}
                      changeFieldArticle={changeFieldArticle}
                      sendArticleForm={getModifyArticle}
                      success={success}
                      message={message}
                    />
                  )}
                  <button
                    onClick={handleDeleteOneArticle}
                    className="Card__btn-delete"
                  >
                    Supprimer
                  </button>
                  {success && (
                    <div className="confirm">
                      <p>{message}</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

OneArticle.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  pseudo: PropTypes.string.isRequired,
  success: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  deleteOneArticle: PropTypes.func.isRequired,
  modifyOneArticle: PropTypes.func.isRequired,
};
export default OneArticle;
