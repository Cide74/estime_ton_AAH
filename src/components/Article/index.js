import React, { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import CardArticle from "./CardArticle";
import "./style.scss";
import { Article } from "@mui/icons-material";
import Loading from "src/components/Loading";

/**
 *
 * @param {array} articles - Liste de tout les articles
 * @param {Number} count - Nombre d'articles
 * @param {string} pseudo - pseudo de l'utilisateur
 * @param {function} getOneArticle - Déclencheur pour récupperer l'id de l'article et de l'auteur
 * @returns jsx component
 *
 */

const Articles = ({ articles, count, pseudo, getOneArticle }) => {
  const [loadData, setLoadData] = useState(false);

  const handleGetOneArticle = (id) => {
    getOneArticle(id);
  };
  // console.log(count);

  const handleOnLogin = () => {
    login.push("/login");
  };
  useEffect(() => {
    // console.log(typeof articles);
    // console.log(articles);
    if (Object.entries(articles).length === 0) {
      setLoadData(false);
    } else {
      setLoadData(true);
    }
  }, [articles]);

  return (
    <div className="home__body">
      <div className="home__body__title">
        <h2 className="paragraphe__title">Listes des articles</h2>
        {count > 0 ? <p> Il y a un total de {count} articles.</p> : ""}
        {pseudo === "undefined" ? (
          <button>
            <Link to="/login">
              <div onClick={handleOnLogin}>
                Connectez-vous pour rédiger un article.
              </div>
            </Link>
          </button>
        ) : (
          <button>
            <Link to="/form-article" className="guestbook__link">
              Rédiger un article !
            </Link>
          </button>
        )}
        <div className="message">
          {loadData ? (
            articles.map((article) => {
              const id_Article = article.id;
              {
                /* console.log(article.title); */
              }
              return (
                <Link
                  key={article.id}
                  className="cardChiffre"
                  to={`/getArticle/${article.id}`}
                  onClick={() => handleGetOneArticle(id_Article)}
                >
                  <CardArticle {...article} />
                </Link>
              );
            })
          ) : count === 0 ? (
            <div>Il n'y a pas d'article pour le moment.</div>
          ) : (
            <Loading />
          )}
        </div>
      </div>
    </div>
  );
};

Articles.proptyptes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired })
  ),
  count: PropTypes.number.isRequired,
  pseudo: PropTypes.string.isRequired,
  getOneArticle: PropTypes.func.isRequired,
};
Article.defaultProps = {
  articles: null,
};
export default Articles;
