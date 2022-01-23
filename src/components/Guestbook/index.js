import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import CardGuestbook from "./CardGuestbook";
import Loading from "src/components/Loading";
import TablePagination from "@mui/material/TablePagination";

import "./style.scss";

/**
 * @param {array} guestbooks - Tableau regroupant tous les messages du livre d'or


 * @param {string} pseudo - Pseudo de l'utilisateur
 * @param {function} getOneGuestbook - Déclencheur pour récupperer l'id du message dans le livre d'or et de l'auteur
 * @returns jsx component
 */

const Guestbooks = ({ guestbooks, pseudo, getOneGuestbook }) => {
  const handleGetOneGuestbook = (id) => {
    getOneGuestbook(id);
  };

  // Pagination
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  if (!guestbooks) {
    return <Loading />;
  }

  return (
    <div className="home__body">
      <div className="home__body__title">
        <h2 className="paragraphe__title">Les messages du livre d'or</h2>
        <p className="content_card__title2-sous-liste">
          Si vous souhaitez laisser un petit message de remerciement ou un
          témoignage, n'hésitez pas à l'écrire ici.
        </p>
        {guestbooks.length > 0 ? <p> Il y a {guestbooks.length} messages dans le livre d'or.</p> : ""}
        {pseudo === "" ? (
          <button>
            <Link to="/login">Connectez-vous pour écrire un message.</Link>
          </button>
        ) : (
          <button>
            <Link to="/form-guestbook" className="guestbook__link">
              Ecrire un message !
            </Link>
          </button>
        )}
        <div>
          {
            guestbooks.length > 0 ?
              guestbooks
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)  
              .map((guestbook) => (
                <Link
                    key={guestbook.id}
                    className="content_card"
                    to={`/getguestbook/${guestbook.id}`}
                    onClick={() => handleGetOneGuestbook(guestbook.id)}
                  >
                    <CardGuestbook {...guestbook} />
                  </Link>
              )) : (
                <div>
                  Il n'y a pas de message dans le livre d'or pour le moment.
                </div>
              )
          }
        </div>
        {guestbooks.length > 0 &&
          <TablePagination
            component="div"
            count={guestbooks.length}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            rowsPerPageOptions={[5, 10, 15, 20, 25, 30]}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        }
        
      </div>
    </div>
  );
};

Guestbooks.propTypes = {
  guestbooks: PropTypes.array.isRequired,
  pseudo: PropTypes.string.isRequired,
  getOneGuestbook: PropTypes.func.isRequired,
};
export default Guestbooks;
