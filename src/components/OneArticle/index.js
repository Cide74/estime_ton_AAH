import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import ArticleForm from "../ArticleForm";
import Loading from "src/components/Loading";
import { properNoun, dateUndefind } from "src/assets/datas/fonction";
import CommentForm from "src/components/CommentForm";
import OneComment from "src/components/OneComment";

import "./style.scss";

/**
 * @param {number} id - id de l'article
 * @param {string} title - titre de l'article
 * @param {string} content - contenu de l'article
 * @param {string} pseudo - Pseudo de l'utilisateur
 * @param {string} writer - Pseudo de l'auteur de l'article
 * @param {array} comments - Les commentaires liés à l'article
 * @param {boolean} success - Réponse de la de la BDD
 * @param {string} message - message de la BDD
 * @param {function} deleteOneArticle - Suppression d'un article
 * @param {function} modifyOneArticle - Modification d'un article
 * @param {function} changeFieldArticle - interaction avec l'input
 * @returns JSX component
 */
const OneArticle = ({
  id,
  title,
  content,
  pseudo,
  writer,
  clearArticle,
  comments,
  success,
  message,
  comSuccess,
  comMessage,
  updated_at,
  deleteOneArticle,
  modifyOneArticle,
  changeFieldArticle,
  changeFieldComment,
  sendFormComment,
}) => {
  const [modify, setModify] = useState(false);
  const [isValue, setIsValue] = useState(false);
  const [loadData, setLoadData] = useState(false);
  const [addComment, setAddComment] = useState(false);

  const navigate = useNavigate();

  const handleDeleteOneArticle = () => {
    deleteOneArticle(id);
    setIsValue(true);
  };

  const handleModalModifyOneArticle = () => {
    if (!modify) {
      setModify(true);
      console.log("je veux modifier un article");
    } else {
      setModify(false);
    }
  };

  // modale de commentaire
  const handleAddComment = () => {
    if (addComment) {
      setAddComment(false);
    } else {
      setAddComment(true);
    }
  };

  const getModifyArticle = () => {
    modifyOneArticle(id);
    setIsValue(true);
  };

  // redirection après suppression valide ou modification
  useEffect(() => {
    let time;
    if (success && isValue) {
      // console.log(`success ${success} et message ${message}`);
      time = setTimeout(() => {
        navigate("/userPage");
        setIsValue(false);
        clearArticle();
      }, 3000);
      return () => clearTimeout(time);
    }
  });

  // affiche les données après les avoir reçues de la BDD
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
          <div className="content_card">
            <h3 className="content_card__title">{properNoun(title)}</h3>
            <div className="cardGuestbook__footer">
              <div className="cardGuestbook__footer__in">
                {writer}, le {dateUndefind(updated_at)}
              </div>
            </div>
            <div className="content_card__paragraphe">
              <p className="content_card__title2-sous-liste">
                - {properNoun(content)}
              </p>
              {pseudo === writer && (
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
          {pseudo && (
            <button onClick={handleAddComment}>Écrivez un commentaire !</button>
          )}
          {addComment && pseudo ? (
            <div>
              <CommentForm
                id={id}
                cate="article"
                changeFieldComment={changeFieldComment}
                sendFormComment={sendFormComment}
                success={comSuccess}
                message={comMessage}
              />
            </div>
          ) : null}

          <div className="content_card">
            {comments.length >= 1 && (
              <h3 className="content_card__title">Liste des commentaires</h3>
            )}
            {comments.length >= 1 ? (
              comments.map((comment) => {
                return (
                  <div key={comment.id} className="content_card__paragraphe">
                    <OneComment {...comment} cate="article" />
                  </div>
                );
              })
            ) : (
              <div>Il n'y a pas de commentaire pour le moment.</div>
            )}
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
  pseudo: PropTypes.string.isRequired,
  writer: PropTypes.string.isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      content: PropTypes.string.isRequired,
    })
  ),
  success: PropTypes.bool,
  message: PropTypes.string,
  deleteOneArticle: PropTypes.func.isRequired,
  modifyOneArticle: PropTypes.func.isRequired,
};
OneArticle.defaultProps = {
  success: false,
  message: "",
};
export default OneArticle;
