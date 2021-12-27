import React, { useEffect, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";

import Calculateur from "src/components/Calculateur";
import Footer from "src/components/Footer";
import Contact from "src/components/Contact";
import My404 from "src/components/My404";
import Formulaire from "src/containers/Formulaire";
import Guestbook from "src/containers/Guestbook";
//import Comment from "src/containers/Comment";
import GuestbookForm from "src/containers/GuestbookForm";
import OneGuestbook from "src/containers/OneGuestbook";

import Chiffre from "src/containers/Chiffre";
import About from "src/components/About";
import Developpeur from "src/components/Developpeur";
// import ScrollIndicator from "src/components/ScrollIndicator";
import Article from "src/containers/Article";
import ArticleForm from "src/containers/ArticleForm";
import OneArticle from "src/containers/OneArticle";
import Header from "src/containers/Header";
import HomePage from "src/containers/HomePage";
import Signup from "src/containers/Signup";
import Question from "src/containers/Formulaire/Question";
import Login from "src/containers/Login";
import MyPage from "src/containers/MyPage";
import Sidebar from "src/containers/Sidebar";
import Parametre from "src/containers/Parametre";
import FormResult from "src/containers/FormResult";

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
          <Switch>
            {/* Placer les routes front ici */}
            <Route exact path="/" component={HomePage} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/userPage" component={MyPage} />
            <Route exact path="/formulaire" component={Formulaire} />
            <Route exact path="/getSimulation/:id" component={FormResult} />
            <Route exact path="/getGuestbook/:id" component={OneGuestbook} />
            <Route exact path="/getArticle/:id" component={OneArticle} />
            <Route exact path="/calculateur" component={Calculateur} />
            <Route exact path="/article" component={Article} />
            <Route exact path="/form-questions" component={Question} />
            <Route exact path="/form-article" component={ArticleForm} />
            <Route exact path="/form-guestbook" component={GuestbookForm} />
            <Route exact path="/guestbook" component={Guestbook} />

            <Route exact path="/chiffre" component={Chiffre} />
            <Route exact path="/developpeur" component={Developpeur} />
            <Route exact path="/Contact" component={Contact} />
            <Route exact path="/about" component={About} />
            <Route exact path="/onlyAdmin" component={Parametre} />
            <Route path="/error404" component={My404} />
            <Redirect to="/error404" />
          </Switch>
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
