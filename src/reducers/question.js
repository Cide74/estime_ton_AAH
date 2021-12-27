import {
  CHANGE_FIELD_QUESTION,
  REFRESH_QUESTION,
  ALL_FORMS,
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
  // resultat
  infosimulation: {},
  message: "",
  success: false,
  allForms: {},
};

const question = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_FIELD_QUESTION: {
      //console.log(`${action.name} : ${action.value}`);
      return {
        ...state,
        [action.name]: action.value,
      };
    }
    case REFRESH_QUESTION: {
       console.log("RefreshQuestion reducer", action.payload);
      return {
        ...state,
        // ...action.payload,
        infosimulation: action.payload.infosimulation,

        
      };

      
    
    };
    console.log(`infosimulation`, infosimulation)
    case ALL_FORMS: {
      // console.log("all forms payload", action.payload);
      return {
        ...state,
        allForms: action.payload,
      };
    }
    default:
      return { ...state };
  }
};
export default question;
