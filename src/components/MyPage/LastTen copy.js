import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Loading from "src/components/Loading";
import { goodFormat } from "src/assets/datas/fonction";
import "./style.scss";

import { 
  name,
  properNoun,
  dateUndefind,
} from "src/assets/datas/fonction";
/**
 *
 * @param {string} title - titre du composant.
 * @param {object} myTabs - Objet des dix derniers..
 * @param {string} element - identifant qui détermine la route.
 * @param {function} idOneElement - Selectionne l'article.
 * @returns
 */
const LastTen = ({ title, myTabs, idOneElement, element }) => {
  const [isData, setIsData] = useState(false);

  const handleGetOne = (element, idElement) => {
    switch (element) {
      case "article":
        idOneElement(idElement);
        setIsData(false);
        break;
      case "simulation":
        idOneElement(idElement);
        setIsData(false);
        break;
      case "guestbook":
        idOneElement(idElement);
        setIsData(false);
        break;
      case "commentaire":
        idOneElement(idElement);
        setIsData(false);
        break;
    }
  };
  useEffect(() => {
    if (typeof myTabs.rows === "undefined") {
      <Loading />;
    } else {
      setIsData(true);
    }
  }, [myTabs]);
  return (
    <div >
      <h2 className="cardChiffre__title">
        {title}
      </h2>
      <div className="home__body__title">
      <ul className="Preformulaire__liste">
        {element === "article" &&
          isData &&
          myTabs.rows[0].article.map((e) => {

console.log(`e`, e)

            const anchor = `/getArticle/${e.id}`;
            const idArticle = e.id;

            return (
              <li key={e.id} className="Preformulaire__liste">

                
                
                <Link
                  to={anchor}
                  onClick={() => handleGetOne(element, idArticle)}
                  className="Preformulaire__liste"
                >
                  Date {dateUndefind(e.updated_at)} 
                  Date {dateUndefind(e.updated_at)} 
                  Date {dateUndefind(e.updated_at)} 
                  - {properNoun(e.title)}
                  - {properNoun(e.content)}
                  
                </Link>
              </li>
            );
          })}
        {element === "simulation" &&
          isData &&
          myTabs.rows[0].infosimulation.map((e) => {
            const anchor = `/getSimulation/${e.id}`;
            const idSimulation = e.id;

            return (
              <li key={e.id} className="LastTen__li-title">
                <Link
                  to={anchor}
                  onClick={() => handleGetOne(element, idSimulation)}
                  className="LastTen__link-title"
                >
                  {e.status_simple}
                </Link>
                <p>{goodFormat(e.created_at)}</p>
              </li>
            );
          })}
        {element === "guestbook" &&
          isData &&
          myTabs.rows[0].guestbook.map((e) => {
            const anchor = `/getGuestbook/${e.id}`;
            const idGuestbook = e.id;
            return (
              <li key={e.id} className="LastTen__li-title">
                <Link
                  to={anchor}
                  onClick={() => handleGetOne(element, idGuestbook)}
                  className="LastTen__link-title"
                >
                  {e.title}
                </Link>
              </li>
            );
          })}
        {element === "commentaire" &&
          isData &&
          myTabs.rows[0].comment.map((e) => {
            const anchor = `/getComment/${e.id}`;
            const idComment = e.id;
            return (
              <li key={e.id} className="LastTen__li-title">
                <Link
                  to={anchor}
                  onClick={() => handleGetOne(element, idComment)}
                  className="LastTen__link-title"
                >
                  {e.content.slice(0, 25) + "..."}
                </Link>
              </li>
            );
          })}
      </ul></div>
    </div>
  );
};

LastTen.propTypes = {
  title: PropTypes.string.isRequired,
  element: PropTypes.string.isRequired,
  myTabs: PropTypes.object.isRequired,
  idOneElement: PropTypes.func.isRequired,
};
LastTen.defaultProps = {
  myTabs: {},
};

export default LastTen;
