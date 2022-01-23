import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import CardArticle from "./CardArticle";
import "./style.scss";
import { Article } from "@mui/icons-material";
import Loading from "src/components/Loading";
import TablePagination from "@mui/material/TablePagination";

/**
 *
 * @param {array} articles - Liste de tous les articles


 * @param {string} pseudo - pseudo de l'utilisateur
 * @param {function} getOneArticle - Déclencheur pour récupérer l'id de l'article et de l'auteur
 * @returns jsx component
 *
 */

const Articles = ({ articles, pseudo, getOneArticle }) => {

  const handleGetOneArticle = (id) => {
    getOneArticle(id);
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

  if (!articles || articles.length === 0) {
    return <Loading />;
  }

  return (
    <div className="home__body">
      <div className="home__body__title">
        <h2 className="paragraphe__title">Liste des articles</h2>
        {articles.count > 0 ? <p> Il y a un total de {articles.count} articles.</p> : ""}
        {pseudo === "" ? (
          <button>
            <Link to="/login">Connectez-vous pour rédiger un article.</Link>
          </button>
        ) : (
          <button>
            <Link to="/form-article" className="guestbook__link">
              Rédiger un article !
            </Link>
          </button>
        )}
        <div>
          <div>
            {
              articles.length > 0 ?
                articles
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((article) => (
                  <Link
                      key={article.id}
                      className="content_card"
                      to={`/getArticle/${article.id}`}
                      onClick={() => handleGetOneArticle(article.id)}
                    >
                      <CardArticle {...article} />
                    </Link>
                )) : (
                  <div>
                    Il n'y a pas d'article pour le moment.
                  </div>
                )
            }
          </div>
          {articles.length > 0 &&
            <TablePagination
              component="div"
              count={articles.length}
              page={page}
              onPageChange={handleChangePage}
              rowsPerPage={rowsPerPage}
              rowsPerPageOptions={[5, 10, 15, 20, 25, 30]}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          }
        </div>
      </div>
    </div>
  );
};

Articles.proptyptes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired })
  ),
  pseudo: PropTypes.string.isRequired,
  getOneArticle: PropTypes.func.isRequired,
};
Article.defaultProps = {
  articles: null,
};
export default Articles;
