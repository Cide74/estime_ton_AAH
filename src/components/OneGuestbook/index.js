import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import GuestbookForm from "../GuestbookForm";
// import Comment from "src/containers/Comment";
import Comment from "../Comment";
import { 
  name,
  name2,
  properNoun,
  dateUndefind,
} from "src/assets/datas/fonction";

import "./style.scss";
import { clearGuestbook } from "src/actions/guestbook";
import Loading from "src/components/Loading";

/**
 * @param {number} id - id du message dans le livre d'or
 * @param {string} title - titre du message dans le livre d'or
 * @param {string} content - contenu de l'guestbook
 * @param {string} pseudo - Pseudo de l'utilisateur
 * @param {boolean} success - Reponse à la requete de la BDD
 * @param {string} message - message de la BDD
 * @param {objet} user - Informations de l'auteur
 * @param {function} deleteOneGuestbook - Suppression d'un message dans le livre d'or
 * @param {function} modifyOneGuestbook - Modification d'un message dans le livre d'or
 * @returns JSX component
 */

const OneGuestbook = ({
  id,
  title,
  content,
  updated_at,
  user,
  pseudo,
  role,
  deleteOneGuestbook,
  modifyOneGuestbook,
  changeFieldGuestbook,
  clearGuestbook,
  success,
  message,
  comments,
  countComments,
}) => {

 // const userPseudo = "inconu";

  function userPseudo (user) {
   // console.log(`userPseudo fonction`, user)
    return user
  }

 console.log(`user oneguestbook`, user);
 // console.log(`pseudo oneguestbook`, name2(pseudo.user));
  console.log(`user.pseudo oneguestbook`,pseudo);
  //console.log(`role oneguestbook`, role)
  //console.log(`message onehuestbook`, message)

  const [modify, setModify] = useState(false);
  const [isValue, setIsValue] = useState(false);
  const [loadData, setLoadData] = useState(false);
  const accueil = useHistory();
  const handleDeleteOneGuestbook = () => {
    deleteOneGuestbook(id);
    setIsValue(true);
  };
  const handleModalModifyOneGuestbook = () => {
    console.log("je veux modifier le message dans le livre d'or");
    if (!modify) {
      setModify(true);
    } else {
      setModify(false);
    }
  };
  const getModifyGuestbook = () => {
    modifyOneGuestbook(id);
    setIsValue(true);
  };

  // redirection après suppression valide ou modification
  useEffect(() => {
    let time;
    if (success && isValue) {
      console.log("j'ai bien supprimé le message dans le livre d'or");
      time = setTimeout(() => {
        accueil.push("/");
        setIsValue(false);
        clearGuestbook();
      }, 3000);
      return () => clearTimeout(time);
    }
  });

  if (!OneGuestbook) {
    const load = <Loading />;
    return load;
  }

useEffect(() => {
    if (!comments) {
      setLoadData(false);
      return <Loading />;
    } else {
      setLoadData(true);
    }
  }, [comments]);

  return (
    <section className="home__body">
      {loadData && ( 
      <div className="home__body__title">
        <div className="cardChiffre" key={id}>
          <h3 className="cardChiffre__title">
            {properNoun(title)}
          </h3>
          <div className="cardGuestbook__footer">
            <div className="cardGuestbook__footer__in"> 
              {name(user)}, le {dateUndefind(updated_at)}
            </div>
          </div>
          <div className="cardChiffre__paragraphe"> 
            {pseudo === name2(user) && (
                <div className="btn">
                  <button onClick={handleModalModifyOneGuestbook}>Modifier</button>
                  {/** 
                  {modify && (
                    <GuestbookForm
                      title={title}
                      content={content}
                      changeFieldGuestbook={changeFieldGuestbook}
                      sendGuestbookForm={getModifyGuestbook}
                      success={success}
                      message={message}
                    />
                  )}
                  */}
                  <button
                    onClick={handleDeleteOneGuestbook}
                    className="Card__btn-delete"
                  >
                    Supprimer
                  </button>
                  {success && (
                    <div className="confirm">
                      <p>{message}</p>
                    </div>
                  )}
                </div>
              )}
            <p className="cardChiffre__title2-sous-liste">
              - {properNoun(content)}
            </p> 
            {modify && (
                    <GuestbookForm
                      title={title}
                      content={content}
                      changeFieldGuestbook={changeFieldGuestbook}
                      sendGuestbookForm={getModifyGuestbook}
                      success={success}
                      message={message}
                    />
                  )}
          </div>
          <div className="message">
            {countComments > 1 ? ( comments.map(comment => {
              return (
                <div key={comment.id}>
                <Comment {...comment} />
                </div>
              );
            })
            ) : (
              <div>Il n'y a pas de commentaire pour le moment.</div>
            )}
          </div>
          <div>
            {role === 3 && (  
              <button >
                <Link to="/form-guestbook" className="guestbook__link">
                  Ecrire un commentaire !
                </Link>
              </button>
            )}
          </div>
        </div>
        </div>
      )}
    </section>
  )
};

OneGuestbook.prototype = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  pseudo: PropTypes.string.isRequired,
  success: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  deleteOneGuestbook: PropTypes.func.isRequired,
  modifyOneGuestbook: PropTypes.func.isRequired
};
export default OneGuestbook;
