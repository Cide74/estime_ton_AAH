import { connect } from "react-redux";
import FormResult from "src/components/FormResult";

const mapStateToProps = state => ({
  infosimulation: state.question.infosimulation
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(FormResult);
