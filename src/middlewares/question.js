import Api from "src/API/index";
import { ON_SUBMIT_QUESTION, GET_ONE_SIMULATION } from "src/actions/question";
import {
  refreshQuestion,
  CALL_ALL_SIMULATIONS,
  allSimulations,
} from "src/actions/question";

const question = (store) => (next) => async (action) => {
  const {
    year,
    aah_amount,
    mva_amount,
    smichb,
    smicnbtf,
    ageMinimal,
    ageRetraite,
    disability_rate_mini,
    disability_rate_max,
    majorationPlafonCouple,
    coefPersonneACharge,
    // foyer
    place_of_residence,
    household_composition,
    nb_child,
    apl,
    // demandeur
    applicant_age,
    applicant_disability,
    applicant_disability_rate,
    applicant_income_without_activity,
    applicant_income_with_activity,
    // époux(se)
    spouse_age,
    spouse_disability,
    spouse_disability_rate,
    spouse_income_without_activity,
    spouse_income_with_activity,
    // autre
    child_income1,
  } = store.getState().question;

  const { id, accessToken } = store.getState().user;
  const options = { headers: { Authorization: `Bearer ${accessToken}` } };

  console.log('apl', apl);

  switch (action.type) {
    case ON_SUBMIT_QUESTION: {
      try {
        const simulation = await Api.post(
          `/user/${id}/infosimulation`,
          {
            year,
            aah_amount,
            mva_amount,
            smichb,
            smicnbtf,
            ageMinimal,
            ageRetraite,
            disability_rate_mini,
            disability_rate_max,
            majorationPlafonCouple,
            coefPersonneACharge,
            place_of_residence,
            household_composition,
            nb_child,
            apl,
            applicant_age,
            applicant_disability,
            applicant_disability_rate,
            applicant_income_without_activity,
            applicant_income_with_activity,
            spouse_age,
            spouse_disability,
            spouse_disability_rate,
            spouse_income_without_activity,
            spouse_income_with_activity,
            child_income1,
          },

          options
        );

        const simulationForState = {
          infosimulation: simulation.data.infosimulation[1],
          message: simulation.data.message,
          success: simulation.data.success,
        }
        const response = refreshQuestion(simulationForState);
        store.dispatch(response);
      } catch (error) {
        console.log("erreur =>", error);
      }
      break;
    }
    case GET_ONE_SIMULATION: {
      try {
        const article = await Api.get(
          `/user/${id}/infosimulation/${action.idSimulation}`,
          options
        );
        const dataArticle = refreshQuestion(article.data);
        console.log("middleware un article", dataArticle);
        store.dispatch(dataArticle);
      } catch (error) {
        console.log(error);
      }
      break;
    }
    case CALL_ALL_SIMULATIONS: {
      try {
        const getAllSimulations = await Api.get("/admininfosimulations", options);
        const response = allSimulations(getAllSimulations.data);

        store.dispatch(response);
      } catch (error) {
        console.log(error);
      }
      break;
    }
    default:
      next(action);
  }
};

export default question;
