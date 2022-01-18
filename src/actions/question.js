export const ON_SUBMIT_QUESTION = "ON_SUBMIT_QUESTION";
export const CHANGE_FIELD_QUESTION = "CHANGE_FIELD_QUESTION";
export const REFRESH_QUESTION = "REFRESH_QUESTION";
export const REFRESH_TEN_QUESTION = "REFRESH_TEN_QUESTION";
export const GET_ONE_SIMULATION = "GET_ONE_SIMULATION";
export const CALL_ALL_SIMULATIONS = "CALL_ALL_SIMULATIONS";
export const ALL_SIMULATIONS = "ALL_SIMULATIONS";

// envoi du formulaire
export const onSubmitQuestion = () => ({
  type: ON_SUBMIT_QUESTION,
});
// gestion des inputs
export const changeFieldQuestion = (name, value) => ({
  type: CHANGE_FIELD_QUESTION,
  name,
  value,
});
// refresh du formulaire
export const refreshQuestion = (payload) => ({
  type: REFRESH_QUESTION,
  payload,
});
// refresh des 10 catégories
export const refreshTenQuestion = (payload) => ({
  type: REFRESH_TEN_QUESTION,
  payload,
});
// une simulation
export const getOneSimulation = (idSimulation) => ({
  type: GET_ONE_SIMULATION,
  idSimulation,
});
// appelle toutes les simulations
export const callAllSimulations = () => ({
  type: CALL_ALL_SIMULATIONS,
});
// refresh des simulations
export const allSimulations = (payload) => ({
  type: ALL_SIMULATIONS,
  payload,
});
