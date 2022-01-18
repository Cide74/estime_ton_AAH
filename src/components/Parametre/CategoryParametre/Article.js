import React from 'react';
import PropTypes from "prop-types";
import { goodDateFormat, goodHourFormat } from "src/assets/datas/fonction";

function Article ({ 
  article,
  categoryName,
  onDelete,
}) {
  return (
    <li key={article.id} className="Params__Content_oneItem">
      <ul className="Params__Content_oneItem_details">
        <li>Id de l'article : {article.id}</li>
        <li>Titre : {article.title}</li>
        <li>Contenu : {article.content}</li>
        <li>
          Date de création : {goodDateFormat(article.created_at)}{" "}
          à {goodHourFormat(article.created_at)}
        </li>
        <li>
          Modifier : {goodDateFormat(article.updated_at)} à{" "}
          {goodHourFormat(article.updated_at)}
        </li>
        <li>Id de l'utilisateur : {article.user_id}</li>
        <li>Pseudo de l'utilisateur : {article.user.pseudo}</li>
        <div className="Params__Content_Btn_choice">
          <button>Modifier</button>
          <button
            onClick={() => onDelete(categoryName, article.id)}
          >
            Supprimer
          </button>
        </div>
      </ul>
    </li>
  );
}

Article.propTypes = {
  article: PropTypes.object.isRequired,
  categoryName: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Article;
