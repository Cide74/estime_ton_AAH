import { connect } from "react-redux";
import Login from "src/components/Login";
import {
  fieldChange,
  onLogin,
  clearInput,
  clearBackValue,
} from "src/actions/user";

const mapStateToProps = (state) => ({
  pseudo: state.user.pseudo,
  password: state.user.password,
  isLogged: state.user.isLogged,
  message: state.user.loginMsg,
  errorMsg: state.user.loginMsgError,
});

const mapDispatchToProps = (dispatch) => ({
  fieldChange: (name, value) => {
    const action = fieldChange(name, value);
    dispatch(action);
  },
  onLogin: (value) => {
    const logged = true;
    dispatch(onLogin(value, logged));
  },
  clearInput: () => {
    const action = clearInput();
    dispatch(action);
  },
  clearBackValue: () => {
    dispatch(clearBackValue());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
