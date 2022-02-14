import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import LastTen from "./LastTen";
import Loading from "src/components/Loading";
import "./style.scss";
import { getOneGuestbook } from "../../actions/guestbook";

/**
 *
 * @param {string} pseudo - Pseudo de l'utilisateur
 * @param {string} email - Email de l'utilisateur
 * @param {number} role - Rôle de l'utilisateur ( administateur / utilisateur )
 * @param {booleen} place_of_residence - Date de naissance de l'utilisateur
 * @param {object} userArticle - Les 10 derniers articles du user
 * @param {object} userSimulation - Les 10 dernières simulations du user
 * @param {object} userGuestbook - Les 10 derniers Guestbook du user
 * @param {object} userComment - message écris pour commenter le guestbook
 * @param {function} getOneArticle - Requete pour un article
 * @param {function} getOneSimulation - Requete pour une simulation
 * @param {function} getOneGuestbook - Requete pour un article du Livre d'or
 * @param {function} getOneComment - Requete pour un commmentaire d'article ou du Livre d'or
 * @returns JSX element
 *
 */
const MyPage = ({
  pseudo,
  email,
  role,
  place_of_residence,
  userArticle,
  userSimulation,
  userGuestbook,
  userComment,
  getOneArticle,
  getOneSimulation,
  getOneGuestbook,
  getOneComment,
}) => {
  const [inFrance, setInFrance] = useState(place_of_residence);
  // pour le loader en attente d'arrivée de la data
  const [myArticle, setMyArticle] = useState(false);
  const [mySimulation, setMySimulation] = useState(false);
  const [myGuestbook, setMyGuestbook] = useState(false);
  const [myComment, setMyComment] = useState(false);

  useEffect(() => {
    if (inFrance === undefined) {
      setInFrance("Vous devez vous connecter ou bien remplir le formulaire");
    } else {
      if (inFrance) {
        setInFrance("Je réside en France");
      } else {
        setInFrance("Je réside à l'étranger");
      }
    }
  });

  const handleGetOneArticle = (id) => {
    setMyArticle(false);
    getOneArticle(id);
  };
  const handleGetOneSimulation = (id) => {
    setMySimulation(false);
    getOneSimulation(id);
  };
  const handleGetOneGuestbook = (id) => {
    setMyGuestbook(false);
    getOneGuestbook(id);
  };
  const handleGetOneComment = (id) => {
    setMyComment(false);
    console.log("id du commentaire", id);
    // TODO requete pour avoir un commentaire
    getOneComment(id);
  };

  const myRole = (role) => {
    let liRole;
    switch (role) {
      case 1:
        liRole = "Votre rôle : vous êtes utilisateur du site";
        return liRole;
      case 2:
        liRole = "Votre rôle : vous êtes modérateur du site";
        return liRole;
      case 3:
        liRole = "Votre rôle : vous êtes administateur du site";
        return liRole;
    }
  };

  useEffect(() => {
    if (Object.entries(userArticle).length === 0 || undefined || null) {
      setMyArticle(false);
      setMySimulation(false);
      setMyGuestbook(false);
      setMyComment(false);
    } else {
      setMyArticle(true);
      setMySimulation(true);
      setMyGuestbook(true);
      setMyComment(true);
    }
  }, [userArticle, userSimulation, userGuestbook, userComment]);
  // REVIEW supprimer les 10 derniers, et mettre la totalité des données par catégorie avec une pagination ?
  return (
    <div className="home__body">
      <div className="home__body__title">
        <h2 className="paragraphe__title">Mes informations personnelles</h2>
        <ul className="cardChiffre__liste">
          <li className="form__compo__in__response">Mon pseudo : {pseudo}</li>
          <li className="form__compo__in__response">Mon Email : {email}</li>
          <li className="form__compo__in__response">{inFrance}</li>
          <li className="form__compo__in__response">{myRole(role)}</li>
        </ul>

        {role === 3 && (
        <div className="form__compo">
          <div className="form__compo__in">
              <Link to="/onlyAdmin" className="myPage__option">
                <button>Paramètres </button>
              </Link>
          </div>
        </div>
        )}
        
        <article>
          {mySimulation ? (
            <div className="cardLastTen">
              <LastTen
                title="Liste de vos 10 dernières simulations"
                myTabs={userSimulation}
                element="simulation"
                idOneElement={(idSimulation) =>
                  handleGetOneSimulation(idSimulation)
                }
              />
            </div>
          ) : (
            <Loading />
          )}
          {/** 

          {myArticle ? (
            <div className="cardLastTen1">
              <LastTen
                title="Liste de vos 10 derniers articles"
                myTabs={userArticle}
                element="article"
                idOneElement={(idArticle) => handleGetOneArticle(idArticle)}
              />
            </div>
          ) : (
            <Loading />
          )}

          {myGuestbook ? (
            <div className="cardLastTen2">
              <LastTen
                title="Liste de vos 10 dernières déclarations dans le livre d'or"
                myTabs={userGuestbook}
                element="guestbook"
                idOneElement={(idGuestbook) =>
                  handleGetOneGuestbook(idGuestbook)
                }
              />
            </div>
          ) : (
            <Loading />
          )}

          {myComment ? (
            <div className="cardLastTen3">
              <LastTen
                title="Liste de vos 10 derniers commentaires"
                myTabs={userComment}
                element="commentaire"
                idOneElement={(idComment) => handleGetOneComment(idComment)}
              />
            </div>
          ) : (
            <Loading />
          )}*/}
        </article>

            <Link to="/formulaire" className="myPage__option">
              <button>Faire une simulation !</button>
            </Link>

      </div>
    </div>
  );
};
MyPage.propTypes = {
  pseudo: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  role: PropTypes.number.isRequired,
  place_of_residence: PropTypes.bool.isRequired,
  userArticle: PropTypes.object.isRequired,
  userSimulation: PropTypes.object.isRequired,
  userGuestbook: PropTypes.object.isRequired,
  userComment: PropTypes.object.isRequired,
  getOneArticle: PropTypes.func.isRequired,
  getOneSimulation: PropTypes.func.isRequired,
  getOneGuestbook: PropTypes.func.isRequired,
  getOneComment: PropTypes.func.isRequired,
};
MyPage.defaultProps = {
  userArticle: {},
  userSimulation: {},
  userGuestbook: {},
  userComment: {},
};
export default MyPage;
