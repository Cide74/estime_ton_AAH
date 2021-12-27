import Api from "src/API/index";
import { ON_SUBMIT_QUESTION } from "src/actions/question";

const question = store => next => async action => {
  const {
    place_of_residence,
    household_composition,
    nb_child,
    apl
  } = store.getState().question;
  const { pseudoId } = store.getState().user;
  switch (action.type) {
    case ON_SUBMIT_QUESTION: {
      try {
        // TODO
        // 1 recup le user ✔
        // 2 affecter l'id pour le mettre dans l'url ✔
        // 3 affecter les valeur reçu du front avec celle du back ✔
        const responseQuestion = await Api.post(
          `/user/${pseudoId}/infosimulation`,
          {
            place_of_residence,
            household_composition,
            nb_child,
            apl
          }
        );
        console.log("responseQuestion => ", responseQuestion);
      } catch (error) {
        console.log("erreur =>", error);
      }
      break;
    }
    default:
      next(action);
  }
};

export default question;
