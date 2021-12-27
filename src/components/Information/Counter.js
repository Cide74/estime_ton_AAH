import React from "react";
import Proptypes from "prop-types";
import "./style.scss";

/**
 *
 * @param {Number} nbArticle - Nombre d'articles écrit
 *
 */
const Counter = ({ nbArticle }) => {
  // recuperer le nombre d'articles en bdd

  return (
    <div className="homepage__counter">
      <p>
        {nbArticle == 0 || undefined
          ? "Pour le moment il n'y a pas d'article sur notre site"
          : `il y a ${nbArticle} articles sur notre site`}
      </p>
    </div>
  );
};

Counter.proptypes = {
  nbArticle: Proptypes.number.isRequired
};
export default Counter;
