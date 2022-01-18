import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import GuestbookForm from "../GuestbookForm";
import OneComment from "../OneComment";
import CommentForm from "src/components/CommentForm";
import { properNoun, dateAndTime } from "src/assets/datas/fonction";

import "./style.scss";

/**
 * @param {number} id - id du message dans le livre d'or
 * @param {string} title - titre du message dans le livre d'or
 * @param {string} content - contenu de l'guestbook
 * @param {string} pseudo - Pseudo de l'utilisateur
 * @param {string} user - Informations de l'auteur
 * @param {string} message - message de la BDD lors d'une modification / suppression d'un message du livre d'or pour GuestbookForm la création d'un commentaire.
 * @param {boolean} success - Réponse de la de la BDD pour GuestbookForm
 * @param {string} comMessage - Pour la création d'un commentaire.
 * @param {boolean} comSuccess - Réponse de la de la BDD pour CommentForm
 * @param {function} deleteOneGuestbook - Suppression d'un message dans le livre d'or
 * @param {function} modifyOneGuestbook - Modification d'un message dans le livre d'or
 * @returns JSX component
 */

const OneGuestbook = ({
  id,
  title,
  content,
  updated_at,
  user,
  pseudo,
  role,
  deleteOneGuestbook,
  modifyOneGuestbook,
  changeFieldGuestbook,
  clearGuestbook,
  success,
  message,
  comSuccess,
  comMessage,
  comments,
  changeFieldComment,
  sendFormComment,
}) => {
  const [modify, setModify] = useState(false);
  const [isValue, setIsValue] = useState(false);
  const [loadData, setLoadData] = useState(false);
  const [addComment, setAddComment] = useState(false);

  const navigate = useNavigate();

  const handleDeleteOneGuestbook = () => {
    deleteOneGuestbook(id);
    setIsValue(true);
  };

  const handleModalModifyOneGuestbook = () => {
    console.log("je veux modifier le message dans le livre d'or");
    if (!modify) {
      setModify(true);
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

  const getModifyGuestbook = () => {
    modifyOneGuestbook(id);
    setIsValue(true);
  };

  // redirection après suppression valide ou modification
  useEffect(() => {
    let time;
    if (success && isValue) {
      console.log("j'ai bien supprimé le message dans le livre d'or");
      time = setTimeout(() => {
        navigate("/");
        setIsValue(false);
        clearGuestbook();
      }, 3000);
      return () => clearTimeout(time);
    }
  });

  useEffect(() => {
    if (!title) {
      setLoadData(false);
    } else {
      setLoadData(true);
    }
  }, [title]);

  return (
    <section className="home__body">
      {loadData && (
        <div className="home__body__title">
          <div className="content_card" key={id}>
            <h3 className="content_card__title">{properNoun(title)}</h3>
            <div className="cardGuestbook__footer">
              <div className="cardGuestbook__footer__in">
                {user}, le {dateAndTime(updated_at)}
              </div>
            </div>
            <div className="content_card__paragraphe">
              {pseudo === user && (
                <div className="btn">
                  <button onClick={handleModalModifyOneGuestbook}>
                    Modifier
                  </button>

                  <button
                    onClick={handleDeleteOneGuestbook}
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
              <p className="content_card__title2-sous-liste">
                - {properNoun(content)}
              </p>
              {modify && (
                <GuestbookForm
                  title={title}
                  content={content}
                  changeFieldGuestbook={changeFieldGuestbook}
                  sendGuestbookForm={getModifyGuestbook}
                  success={success}
                  message={message}
                />
              )}
            </div>
          </div>
          <div>
            {role === 3 && (
              <div>
                <button onClick={handleAddComment}>
                  Écrivez un commentaire !
                </button>
                {addComment && (
                  <CommentForm
                    id={id}
                    cate="guestbook"
                    changeFieldComment={changeFieldComment}
                    sendFormComment={sendFormComment}
                    success={comSuccess}
                    message={comMessage}
                  />
                )}
              </div>
            )}
          </div>
          <div className="content_card">
            {comments.length >= 1 && (
              <h3 className="content_card__title">Liste des commentaires</h3>
            )}
            {comments.length >= 1 ? (
              comments.map((comment) => {
                return (
                  <div key={comment.id} className="content_card__paragraphe">
                    <OneComment {...comment} cate="guestbook" />
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

OneGuestbook.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  pseudo: PropTypes.string.isRequired,
  success: PropTypes.bool,
  message: PropTypes.string,
  deleteOneGuestbook: PropTypes.func.isRequired,
  modifyOneGuestbook: PropTypes.func.isRequired,
};
export default OneGuestbook;
