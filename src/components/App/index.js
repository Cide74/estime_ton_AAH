import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import Calculateur from "src/components/Calculateur";
import Information from "src/components/Information";
import Footer from "src/components/Footer";
import Contact from "src/components/Contact";
import My404 from "src/components/My404";
import Formulaire from "src/components/Formulaire";
import Article from "src/components/Article";
import Guestbook from "src/components/Guestbook";
import Source from "src/components/Source";
import Chiffre from "src/components/Chiffre";
import About from "src/components/About";
import Developpeur from "src/components/Developpeur";
import ScrollIndicator from "src/components/ScrollIndicator";
import Header from "src/containers/Header";
import HomePage from "src/containers/HomePage";
import Signup from "src/containers/Signup";
import Question from "src/containers/Formulaire/Question";
import Login from "src/containers/Login";
import MyPage from "src/containers/MyPage";
import Sidebar from "src/components/Sidebar";

import "./styles.scss";

/**
 * @param {Bool} isLogged - Par défaut à false.
 */
const App = ({ isLogged }) => {
  console.log("islogged App", isLogged);
  useEffect(() => {
    // Pour arriver en haut de page.
    window.scroll(0, 0);
  }, [location]);

  return (
    <div id="app">
      <div id="app__sidebar">
        <Sidebar />
      </div>
      <div id="app__body">
        <Header />
      {/** 
      {!isLogged ? <Redirect to="/login" /> : null} */}
      <Switch>
        {/* Placer les routes front ici */}
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/calculateur" component={Calculateur} />
        <Route exact path="/information" component={Information} />
        <Route exact path="/article" component={Article} />
        <Route exact path="/guestbook" component={Guestbook} />
        <Route exact path="/source" component={Source} />
        <Route exact path="/chiffre" component={Chiffre} />
        <Route exact path="/developpeur" component={Developpeur} />
        <Route exact path="/formulaire" component={Formulaire} />
        <Route exact path="/form-questions" component={Question} />
        <Route exact path="/userPage" component={MyPage} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/about" component={About} />
        <Route path="/error404" component={My404} />
        <Redirect to="/error404" />
      </Switch>
      <Footer /></div>
    </div>
  );
};

App.proptypes = {
  isLogged: PropTypes.bool.isRequired
};
export default App;
