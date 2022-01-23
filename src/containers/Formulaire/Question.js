import { connect } from "react-redux";
import Question from "src/components/Formulaire/Question";
import { changeFieldQuestion, onSubmitQuestion } from "src/actions/question";

const mapStateToProps = (state) => ({
  isLogged: state.user.isLogged,
  // composition du foyer
  place_of_residence: state.question.place_of_residence,
  household_composition: state.question.household_composition,
  nb_child: state.question.nb_child,
  apl: state.question.apl,
  // demandeur
  applicant_age: state.question.applicant_age,
  applicant_disability: state.question.applicant_disability,
  applicant_disability_rate: state.question.applicant_disability_rate,
  applicant_income_with_activity: state.question.applicant_income_with_activity,
  applicant_income_without_activity:
    state.question.applicant_income_without_activity,

  // Epoux / épouse
  spouse_age: state.question.spouse_age,
  spouse_disability: state.question.spouse_disability,
  spouse_disability_rate: state.question.spouse_disability_rate,
  spouse_income_without_activity: state.question.spouse_income_without_activity,
  spouse_income_with_activity: state.question.spouse_income_with_activity,
  // enfant / personne à charge
  child_income1: state.question.child_income1,
  //message: state.question,
  message: state.question.message,
  success: state.question.success,
  infosimulation: state.question.infosimulation,
});

const mapDispatchToProps = (dispatch) => ({
  changeFieldQuestion: (name, value) => {
    const action = changeFieldQuestion(name, value);
    dispatch(action);
  },
  onSubmitQuestion: () => {
    const action = onSubmitQuestion();
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Question);
