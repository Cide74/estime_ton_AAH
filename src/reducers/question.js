import { CHANGE_FIELD_QUESTION } from "src/actions/question";
import { REFRESH_STATE } from "src/actions/user";

const initialState = {
  place_of_residence: true,
  household_composition: 0,
  nb_child: 0,
  apl: false,
  disability_rate: 0 // valeur entre 0 et 1
};

const question = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_FIELD_QUESTION: {
      console.log("", action.value);
      return {
        ...state,
        [action.key]: action.value
      };
    }
    case REFRESH_STATE: {
      console.log(action.payload);
      return {
        ...state,
        // ...action.payload.userInfo
        place_of_residence: action.payload.userInfo.place_of_residence,
        household_composition: action.payload.userInfo.household_composition,
        nb_child: action.payload.userInfo.nb_child,
        apl: action.payload.userInfo.apl,
        disability_rate: action.payload.userInfo.disability_rate
      };
    }
    default:
      return state;
  }
};
export default question;
