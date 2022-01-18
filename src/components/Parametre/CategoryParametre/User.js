import React from 'react';
import PropTypes from "prop-types";
import { goodDateFormat, goodHourFormat } from "src/assets/datas/fonction";

function User ({
  user,
  categoryName,
  onDelete,
}) {
  return (
    <li key={user.id} className="Params__Content_oneItem">
      <ul className="Params__Content_oneItem_details">
        <li>Pseudo : {user.pseudo}</li>
        <li>Email : {user.email}</li>
        <li>Id : {user.id}</li>
        <li>Role : {user.role}</li>
        <li>
          Date de création du compte :{" "}
          {goodDateFormat(user.created_at)} à{" "}
          {goodHourFormat(user.created_at)}
        </li>
        <li>
          Mise à jour du compte :{" "}
          {goodDateFormat(user.updated_at)} à{" "}
          {goodHourFormat(user.updated_at)}
        </li>
        <div className="Params__Content_Btn_choice">
          <button>Modifier</button>
          <button
            onClick={() => onDelete(categoryName, user.id)}
          >
            Supprimer
          </button>
        </div>
      </ul>
    </li>
  );
}

User.propTypes = {
  user: PropTypes.object.isRequired,
  categoryName: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default User;
