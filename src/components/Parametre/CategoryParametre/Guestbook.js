import React from 'react';
import PropTypes from "prop-types";
import { goodDateFormat, goodHourFormat } from "src/assets/datas/fonction";

function Guestbook ({
  gb,
  categoryName,
  onDelete,
}) {
  return (
    <li key={gb.id} className="Params__Content_oneItem">
      <ul className="Params__Content_oneItem_details">
        <li>Id du livre d'or : {gb.id}</li>
        <li>Titre : {gb.title}</li>
        <li>Contenu : {gb.content}</li>
        <li>
          Créé le : {goodDateFormat(gb.created_at)} à{" "}
          {goodHourFormat(gb.created_at)}
        </li>
        <li>
          Modifier le : {goodDateFormat(gb.updated_at)} à{" "}
          {goodHourFormat(gb.updated_at)}
        </li>
        <li>Id de l'auteur : {gb.user_id}</li>
        <li>
          Pseudo de l'auteur : // TODO condition pour pseudo
          <span className="user_Pseudo">
            {gb.user.pseudo}
          </span>
        </li>

        <div className="Params__Content_Btn_choice">
          <button>Modifier</button>
          <button
            onClick={() => onDelete(categoryName, gb.id)}
          >
            Supprimer
          </button>
        </div>
      </ul>
    </li>
  );
}

Guestbook.propTypes = {
  gb: PropTypes.object.isRequired,
  categoryName: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Guestbook;