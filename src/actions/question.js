export const ON_SUBMIT_QUESTION = "ON_SUBMIT_QUESTION";
export const CHANGE_FIELD_QUESTION = "CHANGE_FIELD_QUESTION";

export const onSubmitQuestion = () => ({
  type: ON_SUBMIT_QUESTION
});

export const changeFieldQuestion = (name, value) => ({
  type: CHANGE_FIELD_QUESTION,
  name,
  value
});
