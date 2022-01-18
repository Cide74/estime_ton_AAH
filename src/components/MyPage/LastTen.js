import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Loading from "src/components/Loading";
import {
  goodDateFormat,
  properNoun,
  dateUndefind,
} from "src/assets/datas/fonction";
import "./style.scss";

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
    <div>
      <h2>{title}</h2>
      <article className="form__compo__in">
        {element === "article" &&
          isData &&
          myTabs.rows[0].article.map((e) => {
            const anchor = `/getArticle/${e.id}`;
            const idArticle = e.id;
            return (
              <div key={e.id}>
                <Link
                  to={anchor}
                  onClick={() => handleGetOne(element, idArticle)}
                  className="lastTen"
                >
                  <ul className="lastTen__ul">
                    <li className="lastTen___ul__li">
                      Rédigé le {dateUndefind(e.updated_at)}
                    </li>
                    <li className="lastTen__ul__li__center">
                      - {properNoun(e.title)}
                    </li>
                    <li className="lastTen__ul__li__content">
                      - {properNoun(e.content)}
                    </li>
                  </ul>
                </Link>
              </div>
            );
          })}

        {element === "simulation" &&
          isData &&
          myTabs.rows[0].infosimulation.map((e) => {
            const anchor = `/getSimulation/${e.id}`;
            const idSimulation = e.id;
            return (
              <div key={e.id}>
                <Link
                  to={anchor}
                  onClick={() => handleGetOne(element, idSimulation)}
                  className="LastTen"
                >
                  <ul className="lastTen__ul">
                    <li className="lastTen__ul__li">
                      Estimation du {dateUndefind(e.updated_at)}
                    </li>
                    <li className="lastTen__ul__li__content">
                      - {properNoun(e.status_simple)}
                    </li>
                  </ul>
                </Link>

                <p>{goodDateFormat(e.created_at)}</p>
              </div>
            );
          })}

        {element === "guestbook" &&
          isData &&
          myTabs.rows[0].guestbook.map((e) => {
            const anchor = `/getGuestbook/${e.id}`;
            const idGuestbook = e.id;
            return (
              <div key={e.id}>
                <Link
                  to={anchor}
                  onClick={() => handleGetOne(element, idGuestbook)}
                  className="lastTen"
                >
                  <ul className="lastTen__ul">
                    <li className="lastTen__ul__li">
                      Fait le {dateUndefind(e.updated_at)}
                    </li>
                    <li className="lastTen__ul__li__center">
                      - {properNoun(e.title)}
                    </li>
                    <li className="lastTen__ul__li__content">
                      - {properNoun(e.content)}
                    </li>
                  </ul>
                </Link>
              </div>
            );
          })}

        {element === "commentaire" &&
          isData &&
          myTabs.rows[0].comment.map((e) => {
            const anchor = `/getComment/${e.id}`;
            const idComment = e.id;
            return (
              <div key={e.id} className="LastTen__li-title">
                <Link
                  to={anchor}
                  onClick={() => handleGetOne(element, idComment)}
                  className="LastTen"
                >
                  <ul className="lastTen__ul">
                    <li className="lastTen__ul__li">
                      Fait le {dateUndefind(e.updated_at)}
                    </li>
                    <li className="lastTen__ul__li__content">
                      - {properNoun(e.content)}
                    </li>
                  </ul>
                </Link>
              </div>
            );
          })}
      </article>
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
