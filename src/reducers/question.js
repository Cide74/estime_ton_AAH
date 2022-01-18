import {
  CHANGE_FIELD_QUESTION,
  REFRESH_QUESTION,
  ALL_SIMULATIONS,
} from "src/actions/question";

const initialState = {
  // base
  year: new Date().getFullYear(),
  aah_amount: 903.6,
  mva_amount: 104.77,
  smichb: 10.25,
  smicnbtf: 151.67,
  ageMinimal: 20,
  ageRetraite: 62,
  disability_rate_mini: 0.6666,
  disability_rate_max: 0.8,
  majorationPlafonCouple: 0.81,
  coefPersonneACharge: 0.5,
  // foyer
  place_of_residence: true,
  household_composition: "",
  nb_child: 0,
  apl: false,

  // demandeur
  applicant_age: 0,
  applicant_disability: false,
  applicant_disability_rate: 0,
  applicant_income_without_activity: 0,
  applicant_income_with_activity: 0,

  // conjoint(e)
  spouse_age: 0,
  spouse_disability: false,
  spouse_disability_rate: 0,
  spouse_income_without_activity: 0,
  spouse_income_with_activity: 0,

  // les enfants ou autre personne
  child_income1: 0,
  // résultat
  infosimulation: {},
  message: "",
  success: false,
  allSimulations: {},
};

const question = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_FIELD_QUESTION: {
      // console.log(`${action.name} : ${action.value}`);
      switch (action.name) {
        case "place_of_residence":
        case "household_composition":
        case "apl":
        case "applicant_disability":
        case "spouse_disability":
          return {
            ...state,
            [action.name]: action.value,
          };
        default:
          return {
            ...state,
            [action.name]: +action.value,
          };
      }
    }
    case REFRESH_QUESTION: {
      // console.log("RefreshQuestion reducer", action.payload);
      return {
        ...state,
        // ...action.payload,
        infosimulation: action.payload.infosimulation,
        message: action.payload.message,
        success: action.payload.success,
      };
    }

    case ALL_SIMULATIONS: {
      // console.log("all forms payload", action.payload);
      return {
        ...state,
        allSimulations: action.payload,
      };
    }
    default:
      return { ...state };
  }
};
export default question;
