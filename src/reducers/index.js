import { combineReducers } from "redux";

// importation des reducers
import user from "./user";
import question from "./question";
import chiffre from "./chiffre";
import article from "./article";
import guestbook from "./guestbook";
import comment from "./comment";
import admin from "./admin";

export default combineReducers({
  user,
  question,
  chiffre,
  article,
  guestbook,
  comment,
  admin,
}); // les mettre ensuite entre accolades
