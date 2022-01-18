import React, { useState, useEffect } from "react";
import CommentForm from "src/components/CommentForm";
import { dateAndTime } from "src/assets/datas/fonction";
import Loading from "src/components/Loading";

import "./style.scss";
/**
 * @param {string} cate - categorie livre d'or ou article
 * @param {string} pseudo - pseudo de l'utilisateur
 * @param {string} content - contenu du commentaire
 * @param {object} user - données de l'auteur
 * @param {string} updated_at - date au format iso
 * @returns
 */
const OneComment = ({ cate, id, pseudo, content, user, updated_at }) => {
  const [loadData, setLoadData] = useState(false);
  // TODO avoir la possibilité de modifier / supprimer le contenu si l'auteur du commentaire est le visiteur
  // console.log(cate, content, user, updated_at);

  const handleOnDelete = (id) => {
    console.log("Je supprime le commentaire ", id);
  };
  // TODO Mettre en place la suppression de la modification
  useEffect(() => {
    // place l'utilisateur directement en haut de la page
    window.scrollTo(0, 0);
    if (!content) {
      setLoadData(false);
      return <Loading />;
    } else {
      setLoadData(true);
    }
  }, [content]);

  return (
    <section className="content_card">
      {loadData && (
        <div className="content_card__paragraphe">
          <p className="content_card__title2-sous-liste">- {content}</p>
          <div className="cardGuestbook__footer comment-container__footer">
            {user.pseudo}, le {dateAndTime(updated_at)}.
          </div>
          {pseudo === user.pseudo && (
            <div>
              <button>Modifier</button>{" "}
              <button onClick={() => handleOnDelete(id)}>Supprimer</button>
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default OneComment;
