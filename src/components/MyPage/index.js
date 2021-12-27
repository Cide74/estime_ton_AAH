import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import LastTen from "./LastTen";
import Loading from "src/components/Loading";
import "./style.scss";

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
    console.log("id of guestbook ", id);
  };
  const handleGetOneComment = (id) => {
    setMyComment(false);
    console.log("id du commentaire", id);
  };

  const myRole = (role) => {
    switch (role) {
      case 1:
        return <li>Votre rôle : vous êtes utilisateur du site</li>;

      case 2:
        return <li>Votre rôle : vous êtes modérateur du site</li>;

      case 3:
        return <li>Votre rôle : vous êtes administateur du site</li>;
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

  return (
    <div className="home__body">
      <div className="home__body__title">
      <h2 className="paragraphe__title">
        Mes informations personnelles</h2>
      <ul className="cardChiffre__liste">
        <li className="form__compo__in__response">Mon pseudo : {pseudo}</li>
        <li className="form__compo__in__response">Mon Email : {email}</li>
        <li className="form__compo__in__response">{inFrance}</li>
        <li className="form__compo__in__response">{myRole(role)}</li>
      </ul>
      <div className="form__compo">
        <div className="form__compo__in">
          <button>  
            <Link to="/formulaire">
              Faire une simulation !
            </Link>
          </button>
          <button> 
            <Link to="/form-article">
              Rédiger un article !
            </Link>
          </button>
          <button> 
            <Link to="/form-guestbook">
              Ecrire un messages dans le livre d'or !
            </Link>
          </button>
          <button>
            <Link to="/">
              Rédiger un commentaire (pas de lien pour le moment)
            </Link>
          </button>
          {role === 3 && (
            <button>
              <Link to="/onlyAdmin">
                Paramètres
              </Link>
            </button>
          )}
        </div>
      </div>
      <article>
        {mySimulation ? (
          <div className="cardLastTen">
            <LastTen
              title="Liste de vos 10 dernières simulations"
              myTabs={userSimulation}
              element="simulation"
              idOneElement={(idSimulation) => handleGetOneSimulation(idSimulation)}
            />
          </div>
        ) : (
          <Loading />
        )}

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
              title="Listes de vos 10 derniers déclaration dans le livre d'or"
              myTabs={userGuestbook}
              element="guestbook"
              idOneElement={(idGuestbook) => handleGetOneGuestbook(idGuestbook)}
            />
          </div>
        ) : (
          <Loading />
        )}

        {myComment ? (
          <div className="cardLastTen3">
            <LastTen
              title="Listes de vos 10 derniers commentaires"
              myTabs={userComment}
              element="commentaire"
              idOneElement={(idComment) => handleGetOneComment(idComment)}
            />
          </div>
        ) : (
          <Loading />
        )}
        
      </article>
    </div>
    </div>
  );
};
MyPage.proptypes = {
  pseudo: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  role: PropTypes.number.isRequired,
  place_of_residence: PropTypes.bool.isRequired,
  userArticle: PropTypes.object.isRequired,
  userSimulation: PropTypes.object.isRequired,
  userGuestbook: PropTypes.object.isRequired,
  userComment: PropTypes.object.isRequired,
};
MyPage.defaultProps = {
  userArticle: {},
  userSimulation: {},
  userGuestbook: {},
  userComment: {},
};
export default MyPage;
