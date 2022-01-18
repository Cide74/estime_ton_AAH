import { connect } from "react-redux";
import Signup from "src/components/Signup";
import {
  fieldChange,
  onSubscribe,
  refreshState,
  clearBackValue,
} from "src/actions/user";

const mapStateToProps = (state) => ({
  pseudo: state.user.pseudo,
  email: state.user.email,
  password: state.user.password,
  passwordConf: state.user.passwordConf,
  message: state.user.CreateUserMessage,
});

const mapDispatchToProps = (dispatch) => ({
  fieldChange: (name, value) => {
    const action = fieldChange(name, value);
    dispatch(action);
  },
  onSubscribe: () => {
    const action = onSubscribe();
    // pas de console.log car ce n'est qu'un déclencheur
    dispatch(action);
  },
  refreshState: () => {
    dispatch(refreshState());
  },
  clearBackValue: () => {
    dispatch(clearBackValue());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
