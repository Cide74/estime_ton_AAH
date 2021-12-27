import { combineReducers } from "redux";

// importation des reducers
import user from "./user";
import question from "./question";
import chiffre from "./chiffre";
import article from "./article";
import guestbook from "./guestbook";
import comment from "./comment";

export default combineReducers({
  user,
  question,
  chiffre,
  article,
  guestbook,
  comment
}); // les mettre ensuite entre accolade
