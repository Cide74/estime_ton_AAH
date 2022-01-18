import React from 'react';
import PropTypes from "prop-types";
import { goodDateFormat, goodHourFormat } from "src/assets/datas/fonction";

function Simulation ({
  simulation,
  categoryName,
  onDelete,
}) {
  return (
    <li key={simulation.id} className="Params__Content_oneItem">
      <ul className="Params__Content_oneItem_details">
        <li>Id de la simulation : {simulation.id}</li>
        <li>Réponse simple : {simulation.status_simple}</li>

        <li>
          date de création : {goodDateFormat(simulation.created_at)}{" "}
          à {goodHourFormat(simulation.created_at)}
        </li>
        <li>Id du créateur : {simulation.user_id}</li>
        <div className="Params__Content_Btn_choice">
          <button
            onClick={() => onDelete(categoryName, simulation.id)}
          >
            Supprimer
          </button>
        </div>
      </ul>
    </li>
  );
}

Simulation.propTypes = {
  simulation: PropTypes.object.isRequired,
  categoryName: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Simulation;
