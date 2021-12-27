import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { goodDateFormat, goodHourFormat } from "src/assets/datas/fonction";
import Pagination from "src/components/Pagination";

import { FiArrowUpCircle, FiArrowDownCircle } from "react-icons/fi";

import "./style.scss";

/**
 * @param {Object} allUsers - Objet contenant tout les utilisateurs
 * @param {Object} allForms - Objet contenant tout les formulaires
 * @param {Object} allArticles - Objet contenant tout les articles
 * @param {Object} allComments - Objet contenant tout les commentaires
 * @param {function} callAllUsers - Déclancheur pour un appel de tous les utilisateurs
 * @param {function} callAllForms - Déclancheur pour un appel de tous les formulaires
 * @param {function} callAllArticles - Déclancheur pour un appel de tous les articles
 * @param {function} callAllComments - Déclancheur pour un appel de tous les commentaires
 * @returns JSX element
 */
const Parametre = ({
  callAllUsers,
  allUsers,
  callAllForms,
  allForms,
  callAllArticles,
  allArticles,
  callAllGuestbooks,
  allGuestbooks,
  callAllComments,
  allComments,
}) => {
  const [getUsers, setGetUsers] = useState(false);

  const [getForms, setGetForms] = useState(false);
  const [getArticles, setGetArticles] = useState(false);
  const [getGuestbooks, setGetGuestbooks] = useState(false);
  const [getComments, setGetComments] = useState(false);
  const [count, setCount] = useState(0);
  // pour les btns des div
  const [isApearUser, setIsApearUser] = useState(false);
  const [isApearForm, setIsApearForm] = useState(false);
  const [isApearArt, setIsApearArt] = useState(false);
  const [isApearGbook, setIsApearGbook] = useState(false);
  const [isApearCom, setIsApearCom] = useState(false);

  const handleCallAllUsers = () => {
    console.log("j'appel tous les users");
    callAllUsers();
  };
  const handleCallAllForms = () => {
    console.log("J'appel tous les formulaires");
    callAllForms();
  };
  const handleCallAllArticles = () => {
    console.log("J'appel tous les articles");
    callAllArticles();
  };
  const handleCallAllGuestbooks = () => {
    console.log("J'appel tous les livres d'or");
    callAllGuestbooks();
  };
  const handleCallAllComments = () => {
    console.log("J'appel tous les commentaires");
    callAllComments();
  };

  const handleApear = (item) => {
    switch (item) {
      case "user":
        isApearUser ? setIsApearUser(false) : setIsApearUser(true);
        break;
      case "form":
        isApearForm ? setIsApearForm(false) : setIsApearForm(true);
        break;
      case "art":
        isApearArt ? setIsApearArt(false) : setIsApearArt(true);
        break;
      case "gbook":
        isApearGbook ? setIsApearGbook(false) : setIsApearGbook(true);
        break;
      case "comment":
        isApearCom ? setIsApearCom(false) : setIsApearCom(true);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    if (Object.entries(allUsers).length === 0) {
      setGetUsers(false);
    } else {
      setGetUsers(true);
      setCount(allUsers.users.count);
    }
    if (Object.entries(allForms).length === 0) {
      setGetForms(false);
    } else {
      setGetForms(true);
    }
    if (Object.entries(allArticles).length === 0) {
      setGetArticles(false);
    } else {
      setGetArticles(true);
    }
    if (Object.entries(allGuestbooks).length === 0) {
      setGetGuestbooks(false);
    } else {
      setGetGuestbooks(true);
    }
    if (Object.entries(allComments).length === 0) {
      setGetComments(false);
    } else {
      console.log(allComments);
      setGetComments(true);
    }
  }, [allUsers, allForms, allArticles, allGuestbooks, allComments]);

  return (
    <div className="Params">
      <h2>Ici je fais ce que je veux !</h2>
      <strong>Même danser la carioca !!! 💃🕺</strong>
      <div className="Params__Btn_call">
        <button onClick={handleCallAllUsers}>Utilisateurs</button>
        <button onClick={handleCallAllForms}>Formulaires</button>
        <button onClick={handleCallAllArticles}>Articles</button>
        <button onClick={handleCallAllGuestbooks}>Livres d'or</button>
        <button onClick={handleCallAllComments}>Commentaires</button>
      </div>
      <div className="Params__boxe">
        <div className="Params__Content_Items user">
          <div>
            <h3 className="Params__Content_title">Utilisateurs</h3>
            <div
              onClick={() => handleApear("user")}
              className="Params__Content_modal"
            >
              {isApearUser ? <FiArrowUpCircle /> : <FiArrowDownCircle />}
            </div>
          </div>
          <div style={isApearUser ? { display: "block" } : { display: "none" }}>
            <ul className="Params__Content_allItem">
              {getUsers &&
                allUsers.users.rows.map((user) => {
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
                          <button>Supprimer</button>
                        </div>
                      </ul>
                    </li>
                  );
                })}
            </ul>

            <div>{getUsers && <Pagination count={count} />}</div>
          </div>
        </div>

        <div className="Params__Content_Items form">
          <div>
            <h3 className="Params__Content_title">Formulaire</h3>
            <div
              onClick={() => handleApear("form")}
              className="Params__Content_modal"
            >
              {isApearForm ? <FiArrowUpCircle /> : <FiArrowDownCircle />}
            </div>
          </div>
          <div style={isApearForm ? { display: "block" } : { display: "none" }}>
            <ul className="Params__Content_allItem">
              {getForms &&
                allForms.nbsimulations.rows.map((form) => {
                  return (
                    <li key={form.id} className="Params__Content_oneItem">
                      <ul className="Params__Content_oneItem_details">
                        <li>Id du formulaire : {form.id}</li>
                        <li>
                          date de création : {goodDateFormat(form.created_at)} à{" "}
                          {goodHourFormat(form.created_at)}
                        </li>
                        <li>Id du créateur : {form.user_id}</li>
                        <div className="Params__Content_Btn_choice">
                          <button>Modifier</button>
                          <button>Supprimer</button>
                        </div>
                      </ul>
                    </li>
                  );
                })}
            </ul>
            <div>{getForms && <Pagination count={count} />}</div>
          </div>
        </div>
        <div className="Params__Content_Items art">
          <div>
            <h3 className="Params__Content_title">Articles</h3>.{" "}
            <div
              onClick={() => handleApear("art")}
              className="Params__Content_modal"
            >
              {isApearArt ? <FiArrowUpCircle /> : <FiArrowDownCircle />}
            </div>
          </div>
          <div style={isApearArt ? { display: "block" } : { display: "none" }}>
            <ul className="Params__Content_allItem">
              {getArticles &&
                allArticles.articles.rows.map((art) => {
                  return (
                    <li key={art.id} className="Params__Content_oneItem">
                      <ul className="Params__Content_oneItem_details">
                        <li>Id de l'article : {art.id}</li>
                        <li>Titre : {art.title}</li>
                        <li>Contenu : {art.content}</li>
                        <li>
                          Date de création : {goodDateFormat(art.created_at)} à{" "}
                          {goodHourFormat(art.created_at)}
                        </li>
                        <li>
                          Modifier : {goodDateFormat(art.updated_at)} à{" "}
                          {goodHourFormat(art.updated_at)}
                        </li>
                        <li>Id de l'utilisateur : {art.user_id}</li>
                        <li>Pseudo de l'utilisateur : {art.user.pseudo}</li>
                        <div className="Params__Content_Btn_choice">
                          <button>Modifier</button>
                          <button>Supprimer</button>
                        </div>
                      </ul>
                    </li>
                  );
                })}
            </ul>
            <div>{getArticles && <Pagination count={count} />}</div>
          </div>
        </div>
        <div className="Params__Content_Items gbook">
          <div>
            <h3 className="Params__Content_title">Livres d'or</h3>
            <div
              onClick={() => handleApear("gbook")}
              className="Params__Content_modal"
            >
              {isApearGbook ? <FiArrowUpCircle /> : <FiArrowDownCircle />}
            </div>
          </div>
          <div
            style={isApearGbook ? { display: "block" } : { display: "none" }}
          >
            <ul className="Params__Content_allItem">
              {getGuestbooks &&
                allGuestbooks.guestbooks.rows.map((gb) => {
                  return (
                    <li key={gb.id} className="Params__Content_oneItem">
                      <ul className="Params__Content_oneItem_details">
                        <li>Id du livre d'or : {gb.id}</li>
                        <li>Titre : {gb.title}</li>
                        <li>Contenu : {gb.content}</li>
                        <li>
                          Créer le : {goodDateFormat(gb.created_at)} à{" "}
                          {goodHourFormat(gb.created_at)}
                        </li>
                        <li>
                          Modifier le : {goodDateFormat(gb.updated_at)} à{" "}
                          {goodHourFormat(gb.updated_at)}
                        </li>
                        <li>Id de l'auteur : {gb.user_id}</li>

                        <div className="Params__Content_Btn_choice">
                          <button>Modifier</button>
                          <button>Supprimer</button>
                        </div>
                      </ul>
                    </li>
                  );
                })}
            </ul>
            <div>{getGuestbooks && <Pagination count={count} />}</div>
          </div>
        </div>
        <div className="Params__Content_Items comment">
          <div>
            <h3 className="Params__Content_title">Commentaires</h3>
            <div
              onClick={() => handleApear("comment")}
              className="Params__Content_modal"
            >
              {isApearCom ? <FiArrowUpCircle /> : <FiArrowDownCircle />}
            </div>
          </div>
          <div style={isApearCom ? { display: "block" } : { display: "none" }}>
            <ul className="Params__Content_allItem">
              {getComments &&
                allComments.comments.rows.map((comment) => {
                  return (
                    <li key={comment.id} className="Params__Content_oneItem">
                      <ul className="Params__Content_oneItem_details">
                        <li>Id du commentaires: {comment.id}</li>
                        <li>Contenu : {comment.content}</li>

                        <li>
                          Date de création du compte :{" "}
                          {goodDateFormat(comment.created_at)} à{" "}
                          {goodHourFormat(comment.created_at)}
                        </li>
                        <li>
                          Mise à jour du compte :{" "}
                          {goodDateFormat(comment.updated_at)} à{" "}
                          {goodHourFormat(comment.updated_at)}
                        </li>
                        <li>Article ID : {comment.article_id}</li>
                        <li>Guestbook ID : {comment.guestbook_id}</li>
                        <div className="Params__Content_Btn_choice">
                          <button>Modifier</button>
                          <button>Supprimer</button>
                        </div>
                      </ul>
                    </li>
                  );
                })}
            </ul>
            <div>{getComments && <Pagination count={count} />}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

Parametre.propTypes = {
  allUsers: PropTypes.object.isRequired,
  allForms: PropTypes.object.isRequired,
  allArticles: PropTypes.object.isRequired,
  allGuestbooks: PropTypes.object.isRequired,
  allComments: PropTypes.object.isRequired,

  callAllUsers: PropTypes.func.isRequired,
  callAllForms: PropTypes.func.isRequired,
  callAllArticles: PropTypes.func.isRequired,
  callAllComments: PropTypes.func.isRequired,
};
Parametre.defaultProps = {
  allUsers: {},
  allForms: {},
  allArticles: {},
  allGuestbooks: {},
  allComments: {},
};
export default Parametre;
