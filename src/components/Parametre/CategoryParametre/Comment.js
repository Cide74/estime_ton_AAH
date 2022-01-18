import React from 'react';
import PropTypes from "prop-types";
import { goodDateFormat, goodHourFormat } from "src/assets/datas/fonction";

function Comment ({
  comment,
  categoryName,
  onDelete,
}) {
  return (
    <li key={comment.id} className="Params__Content_oneItem">
      <ul className="Params__Content_oneItem_details">
        <li>Id du commentaire: {comment.id}</li>
        <li>Contenu : {comment.content}</li>
        <li>
          Id de l'auteur du commentaire : {comment.user_id}
        </li>
        <li>
          Pseudo de l'auteur du commentaire :
          {comment.user && (
            <span className="user_Pseudo">
              {comment.user.pseudo}
            </span>
          )}
        </li>
        <li>
          Date de création du compte :{" "}
          {goodDateFormat(comment.created_at)} à{" "}
          {goodHourFormat(comment.created_at)}
        </li>
        <li>
          Mise à jour du compte :{" "}
          {goodDateFormat(comment.updated_at)} à{" "}
          {goodHourFormat(comment.updated_at)}
        </li>
        <li>Article ID : {comment.article_id}</li>
        <li>Guestbook ID : {comment.guestbook_id}</li>
        <div className="Params__Content_Btn_choice">
          <button>Modifier</button>
          <button
            onClick={() =>
              onDelete(categoryName, comment.id)
            }
          >
            Supprimer
          </button>
        </div>
      </ul>
    </li>
  );
}

Comment.propTypes = {
  comment: PropTypes.object.isRequired,
  categoryName: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Comment;
