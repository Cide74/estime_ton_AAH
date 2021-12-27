import { combineReducers } from "redux";

// importation des reducers
import user from "./user";
import question from "./question";

export default combineReducers({
  user,
  question
}); // les mettre ensuite entre accolade
