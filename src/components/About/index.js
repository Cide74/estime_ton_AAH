import React from "react";
import "./style.scss";

const About = () => {
  return (  
  <div className="home__body">
    <div className="home__body__title">
      <h2 className="paragraphe__title">
        A propos de l'Allocation aux Adultes Handicapés (AAH)
      </h2>
      <br />
      <p className="About__para">
        L’Allocation aux Adultes Handicapés (AAH) est une aide financière qui garantit aux personnes handicapées un revenu minimal d’existence pour faire face aux dépenses de la vie courante.
      </p>

      <h3 className="About__title2">
        Pour plus d'informations ?
      </h3>

      <a 
        className="About__link"
        target="_blank" 
        href="https://www.monparcourshandicap.gouv.fr/aides/lallocation-aux-adultes-handicapes-aah"
      >
        Mon parcours handicap.gouv.fr - Les aides pour l'allocation aux adultes handicapés (aah)
      </a>
      <a 
        className="About__link"
        target="_blank" 
        href="https://www.monparcourshandicap.gouv.fr/sites/default/files/2020-05/Allocation%20Adultes%20Handicap%C3%A9s%20AAH%20-%20facile%20%C3%A0%20lire%20et%20%C3%A0%20comprendre.pdf"
      >
        Allocation Adultes Handicapes AAH - facile à lire et à comprendre.pdf (406.84 Ko / PDF)
      </a>
      <a 
        className="About__link"
        target="_blank" 
        href="https://www.monparcourshandicap.gouv.fr/sites/default/files/2020-05/MDPH%20tout%20savoir%20-%20facile%20%C3%A0%20lire%20et%20%C3%A0%20comprendre.pdf"
      >
        MDPH tout savoir - facile à lire et à comprendre.pdf (1003.92 Ko / PDF)
      </a>
      <a 
        className="About__link"
        target="_blank" 
        href="https://www.monparcourshandicap.gouv.fr/sites/default/files/2020-05/Comment%20faire%20sa%20demande%20MDPH%20-%20facile%20%C3%A0%20lire%20et%20%C3%A0%20comprendre.pdf"
      >
        Comment faire sa demande MDPH - facile à lire et à comprendre.pdf (1.57 Mo / PDF)
      </a>
    </div>
  </div>
  );
};

export default About;
