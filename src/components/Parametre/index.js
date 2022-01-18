import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import "./style.scss";
import CategoryParametre from "./CategoryParametre";

/**
 * @param {Object} allUsers - Objet contenant tous les utilisateurs
 * @param {Object} allSimulations - Objet contenant toutes les simulations
 * @param {Object} allArticles - Objet contenant tous les articles
 * @param {Object} allComments - Objet contenant tous les commentaires
 * @param {String} delUserConfirm - message de confirmation de suppression pour User
 * @param {function} callAllUsers - déclencheur pour un appel de tous les utilisateurs
 * @param {function} callAllSimulations - déclencheur pour un appel de toutes les simulations
 * @param {function} callAllArticles - déclencheur pour un appel de tous les articles
 * @param {function} callAllComments - déclencheur pour un appel de tous les commentaires
 * @param {function} AdminDeleteUser - déclencheur pour supprimer un utilisateur
 * @param {function} AdminDeleteSimulation - déclencheur pour supprimer un formulaire
 * @param {function} AdminDeleteArt - déclencheur pour supprimer un article
 * @param {function} AdminDeleteGbook - déclencheur pour supprimer un article du livre d'or
 * @param {function} AdminDeleteComment - déclencheur pour supprimer un commentaire du livre d'or ou des articles
 * @returns JSX element
 */
const Parametre = ({
  callAllUsers,
  allUsers,
  callAllSimulations,
  allSimulations,
  callAllArticles,
  allArticles,
  callAllGuestbooks,
  allGuestbooks,
  callAllComments,
  allComments,
  AdminDeleteUser,
  AdminDeleteSimulation,
  delUserConfirm,
  delUserSuccess,
  delFormConfirm,
  delSimulationSuccess,
  AdminDeleteArt,
  delArtConfirm,
  delArtSuccess,
  AdminDeleteGbook,
  delGbConfirm,
  delGbSuccess,
  AdminDeleteComment,
  delComConfirm,
  delComSuccess,
}) => {
  const [getUsers, setGetUsers] = useState(false);

  const [getSimulations, setGetSimulations] = useState(false);
  const [getArticles, setGetArticles] = useState(false);
  const [getGuestbooks, setGetGuestbooks] = useState(false);
  const [getComments, setGetComments] = useState(false);
  // pour les btns des div
  const [isAppearUser, setisAppearUser] = useState(false);
  const [isAppearForm, setIsAppearSimulation] = useState(false);
  const [isAppearArt, setisAppearArt] = useState(false);
  const [isAppearGbook, setisAppearGbook] = useState(false);
  const [isAppearCom, setisAppearCom] = useState(false);


  // appels des differents items
  const handleCallAllUsers = () => {
    callAllUsers();
  };
  const handleCallAllSimulations = () => {
    callAllSimulations();
  };
  const handleCallAllArticles = () => {
    callAllArticles();
  };
  const handleCallAllGuestbooks = () => {
    callAllGuestbooks();
  };
  const handleCallAllComments = () => {
    callAllComments();
  };

  /**
   * supprimer
   * @param {String} item - Valeur identifiant la categorie
   * @param {Number} idUser - Identifiant de l'auteur de l'élément
   * @param {Number} idElement - Identifiant de l'élément à supprimé
   */
  const handleDeleteItem = (item, idElement) => {
    switch (item) {
      case "user":
        // console.log("user ", idElement);
        AdminDeleteUser(idElement);
        break;
      case "simulation":
        // console.log("simulation", idElement);
        AdminDeleteSimulation(idElement);
        break;
      case "art":
        // console.log("art", idElement);
        AdminDeleteArt(idElement);
        break;
      case "gbook":
        // console.log("gbook", idElement);
        AdminDeleteGbook(idElement);
        break;
      case "comment":
        // console.log("comment", idElement);
        AdminDeleteComment(idElement);
        break;
    }
  };
  /**
   * modifier
   * @param {String} item - Valeur identifiant la categorie
   * @param {Number} idUser - Identifiant de l'auteur de l'élément
   * @param {Number} idElement - Identifiant de l'élément à modifié
   */
  const handleModifyItem = (item, idUser, idElement) => {
    switch (item) {
      case "user":
        console.log("user ", idUser, idElement);
        break;
      case "art":
        console.log("art");
        break;
      case "gbook":
        console.log("gbook");
        break;
      case "comment":
        console.log("comment");
        break;
    }
  };

  // dépliant
  const handleAppear = (item) => {
    switch (item) {
      case "user":
        isAppearUser ? setisAppearUser(false) : setisAppearUser(true);
        break;
      case "simulation":
        isAppearForm ? setIsAppearSimulation(false) : setIsAppearSimulation(true);
        break;
      case "art":
        isAppearArt ? setisAppearArt(false) : setisAppearArt(true);
        break;
      case "gbook":
        isAppearGbook ? setisAppearGbook(false) : setisAppearGbook(true);
        break;
      case "comment":
        isAppearCom ? setisAppearCom(false) : setisAppearCom(true);
        break;
      default:
        break;
    }
  };
  // check l'arrivée de la data
  useEffect(() => {
    if (Object.entries(allUsers).length === 0) {
      setGetUsers(false);
    } else {
      setGetUsers(true);
    }
    if (Object.entries(allSimulations).length === 0) {
      setGetSimulations(false);
    } else {
      console.log(allSimulations);
      setGetSimulations(true);
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
  }, [
    allUsers,
    allSimulations,
    allArticles,
    allGuestbooks,
    allComments,
    delUserSuccess,
    delSimulationSuccess,
  ]);

  return (
    <div className="Params">
      <h2>Ici je fais ce que je veux !</h2>
      <strong>Même danser la carioca !!! 💃🕺</strong>
      <div className="Params__Btn_call">
        <button onClick={handleCallAllUsers}>Utilisateurs</button>
        <button onClick={handleCallAllSimulations}>Simulations</button>
        <button onClick={handleCallAllArticles}>Articles</button>
        <button onClick={handleCallAllGuestbooks}>Livre d'or</button>
        <button onClick={handleCallAllComments}>Commentaires</button>
      </div>
      <div className="Params__boxe">

        <CategoryParametre
          categoryName="user"
          getCategory={getUsers}
          data={allUsers.users}
          isAppear={isAppearUser}
          handleAppear={handleAppear}
          onDelete={handleDeleteItem}
        />
        <CategoryParametre
          categoryName="simulation"
          getCategory={getSimulations}
          data={allSimulations.infosimulations}
          isAppear={isAppearForm}
          handleAppear={handleAppear}
          onDelete={handleDeleteItem}
        />
        <CategoryParametre
          categoryName="art"
          getCategory={getArticles}
          data={allArticles.articles}
          isAppear={isAppearArt}
          handleAppear={handleAppear}
          onDelete={handleDeleteItem}
        />
        <CategoryParametre
          categoryName="gbook"
          getCategory={getGuestbooks}
          data={allGuestbooks.guestbooks}
          isAppear={isAppearGbook}
          handleAppear={handleAppear}
          onDelete={handleDeleteItem}
        />
        <CategoryParametre
          categoryName="comment"
          getCategory={getComments}
          data={allComments.comments}
          isAppear={isAppearCom}
          handleAppear={handleAppear}
          onDelete={handleDeleteItem}
        />

      </div>
    </div>
  );
};

Parametre.propTypes = {
  allUsers: PropTypes.object.isRequired,
  allSimulations: PropTypes.object.isRequired,
  allArticles: PropTypes.object.isRequired,
  allGuestbooks: PropTypes.object.isRequired,
  allComments: PropTypes.object.isRequired,
  delUserConfirm: PropTypes.string.isRequired,
  delFormConfirm: PropTypes.string.isRequired,
  delArtConfirm: PropTypes.string.isRequired,
  delGbConfirm: PropTypes.string.isRequired,

  callAllUsers: PropTypes.func.isRequired,
  callAllSimulations: PropTypes.func.isRequired,
  callAllArticles: PropTypes.func.isRequired,
  callAllComments: PropTypes.func.isRequired,
  AdminDeleteUser: PropTypes.func.isRequired,
  AdminDeleteSimulation: PropTypes.func.isRequired,
  AdminDeleteArt: PropTypes.func.isRequired,
  AdminDeleteGbook: PropTypes.func.isRequired,
  AdminDeleteComment: PropTypes.func.isRequired,
};
Parametre.defaultProps = {
  allUsers: {},
  allSimulations: {},
  allArticles: {},
  allGuestbooks: {},
  allComments: {},
  delUserConfirm: "",
  delFormConfirm: "",
  delArtConfirm: "",
  delGbConfirm: "",
  delComConfirm: "",
  delUserSuccess: false,
  delSimulationSuccess: false,
  delArtSuccess: false,
  delGbSuccess: false,
  delComSuccess: false,
};
export default Parametre;
