import React from "react";
import PropTypes from "prop-types";
import { Link, Redirect } from "react-router-dom";
import CardGuestbook from "./CardGuestbook";
import Loading from "src/components/Loading";

import "./style.scss";

/**
 * @param {Array} guestbooks - Tableau regroupant tout les méssages du livre d'or
 * @param {Number} count - Nombre d'guestbooks
 * @param {string} dateISO - format de date en anglais yyyy-mm-ddThh:mm:ss
 * @param {function} getOneGuestbook - Déclencheur pour récupperer l'id du message dans le livre d'or et de l'auteur
 * @returns jsx component
 */

const Guestbooks = ({ guestbooks, count, pseudo, getOneGuestbook }) => {

  const handleGetOneGuestbook = id => {
    getOneGuestbook(id);
  };

  const handleOnLogin = () => {
    login.push("/login");
  };

  if (!guestbooks) {
    const load = <Loading />;
    return load;
  }

  return (
    <div className="home__body">
      <div className="home__body__title">
      <h2 className="paragraphe__title">
        Les messages du livre d'or
      </h2>
      <p className="cardChiffre__title2-sous-liste">
        Si vous souhaiter laisser un petit message de remerciement ou un témoignages, n'hésiter pas à l'écrire ici.
      </p>
      {count > 0 ? ( 
        <p> Il y a {count} messages dans le livre d'or.</p> 
      ) : ("")}
      { pseudo === "undefined" ? (
        <button >
          <Link to="/login">
            <div onClick={handleOnLogin}>
              Connectez-vous pour écrire un message.
            </div>
          </Link>
        </button> 
      ) :(
        <button >
          <Link to="/form-guestbook" className="guestbook__link">
            Ecrire un message !
          </Link>
        </button>
      )}
      <div className="message">
        {count > 0 ? ( guestbooks.map(guestbook => {
          return (
            <Link
              key={guestbook.id}
              className="cardChiffre"
              to={`/getguestbook/${guestbook.id}`}
              onClick={() => handleGetOneGuestbook(guestbook.id)}
            >
              <CardGuestbook {...guestbook} />
            </Link>
          );
        })
        ) : (
          <div>Il n'y a pas de message dans le livre d'or pour le moment.</div>
        )}
      </div>
      </div>
    </div>
  );
};

Guestbooks.proptyptes = {
  guestbooks: PropTypes.array.isRequired,
  count: PropTypes.array.isRequired
};
export default Guestbooks;
