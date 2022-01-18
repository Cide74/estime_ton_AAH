import React from "react";
import error404 from "../../assets/error404.jpg";
import "./style.scss";

const My404 = () => {
  return (
    <div id="text404">
      <img
        src={error404}
        alt="Erreur 404 page non trouvée, c'est un chat qui se lèche"
        id="text404__image404"
      />
    </div>
  );
};

export default My404;
