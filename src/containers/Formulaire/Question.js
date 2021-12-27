import { connect } from "react-redux";
import Question from "src/components/Formulaire/Question";
import { changeFieldQuestion, onSubmitQuestion } from "src/actions/question";

const mapStateToProps = state => ({
  place_of_residence: state.question.place_of_residence,
  household_composition: state.question.household_composition,
  nb_child: state.question.nb_child,
  apl: state.question.apl
});

const mapDispatchToProps = dispatch => ({
  changeFieldQuestion: (name, value) => {
    console.log("je passe dans le dispatch avec name,value :", name, value);
    const action = changeFieldQuestion(name, value);
    dispatch(action);
  },
  onSubmitQuestion: () => {
    const action = onSubmitQuestion();
    dispatch(action);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Question);
