import { createStore, applyMiddleware, compose } from "redux";
import reducer from "src/reducers";
import user from "src/middlewares/user";
import question from "src/middlewares/question";
import chiffre from "src/middlewares/chiffre";
import article from "src/middlewares/article";
import guestbook from "src/middlewares/guestbook";
import comment from "src/middlewares/comment";
import admin from "src/middlewares/admin";

// pour l'utilisation du devtool
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  // placer les middlewares entre ()
  applyMiddleware(user, question, chiffre, article, guestbook, comment, admin)
);

const store = createStore(reducer, enhancers);
export default store;
