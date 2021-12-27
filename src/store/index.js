import { createStore, applyMiddleware, compose } from "redux";
import reducer from "src/reducers";
import user from "src/middlewares/user";
import question from "src/middlewares/question";

// pour l'utilisation du devtool
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  // placer les middlewares entre ()
  applyMiddleware(user, question)
);

const store = createStore(reducer, enhancers);
export default store;
