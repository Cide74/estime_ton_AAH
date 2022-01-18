import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import PropTypes from "prop-types";

import Calculateur from "src/components/Calculateur";
import Footer from "src/components/Footer";
import Contact from "src/components/Contact";
import My404 from "src/components/My404";
import Formulaire from "src/containers/Formulaire";
import Chiffre from "src/containers/Chiffre";
import About from "src/components/About";
import Developpeur from "src/components/Developpeur";
import Header from "src/containers/Header";
import HomePage from "src/containers/HomePage";
import Signup from "src/containers/Signup";
import Question from "src/containers/Formulaire/Question";
import Login from "src/containers/Login";
import MyPage from "src/containers/MyPage";
import Sidebar from "src/containers/Sidebar";
import Parametre from "src/containers/Parametre";
import FormResult from "src/containers/FormResult";
import Guestbook from "src/containers/Guestbook";
import GuestbookForm from "src/containers/GuestbookForm";
import OneGuestbook from "src/containers/OneGuestbook";
import Article from "src/containers/Article";
import ArticleForm from "src/containers/ArticleForm";
import OneArticle from "src/containers/OneArticle";
import CommentForm from "src/containers/CommentForm";
import OneComment from "src/containers/OneComment";

import "./styles.scss";

/**
 *
 * @param {Bool} isLogged - Par défaut à false.
 * @param {string} pseudo - Pseudo de l'utilisateur.
 *
 */
const App = ({ isLogged, pseudo }) => {
  useEffect(() => {
    // Pour arriver en haut de page.
    window.scroll(0, 0);
  }, [location]);

  useEffect(() => {
    if (pseudo !== "" || typeof pseudo !== "undefined") {
      // console.log("j'ai le pseudo ", pseudo);
    }
    if (isLogged) {
      console.log("je suis loggé");
    }
  }, [isLogged]);

  return (
    <div className="app">
      <div className="app__sidebar">
        <Sidebar />
      </div>
      <div className="app__body">
        <Header />
        {/* <ScrollIndicator /> */}
        <div className="app__body__center">
          <Routes>
            {/* Placer les routes front ici */}
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/userPage" element={<MyPage />} />
            <Route path="/formulaire" element={<Formulaire />} />
            <Route path="/getSimulation/:id" element={<FormResult />} />
            <Route path="/getGuestbook/:id" element={<OneGuestbook />} />
            <Route path="/getArticle/:id" element={<OneArticle />} />
            <Route path="/getComment/:id" element={<OneComment />} />
            <Route path="/calculateur" element={<Calculateur />} />
            <Route path="/form-questions" element={<Question />} />
            <Route path="/form-article" element={<ArticleForm />} />
            <Route path="/form-guestbook" element={<GuestbookForm />} />
            <Route path="/form-comment" element={<CommentForm />} />
            <Route path="/article" element={<Article />} />
            <Route path="/guestbook" element={<Guestbook />} />
            <Route path="/chiffre" element={<Chiffre />} />
            <Route path="/developpeur" element={<Developpeur />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/onlyAdmin" element={<Parametre />} />
            <Route path="/error404" element={<My404 />} />
            <Route path="*" element={<Navigate to="/error404" />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  );
};

App.proptypes = {
  isLogged: PropTypes.bool,
};
export default App;
