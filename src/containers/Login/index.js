import { connect } from "react-redux";
import Login from "src/components/Login";
import { fieldChange, onLogin, refreshHeader } from "src/actions/user";

const mapStateToProps = state => ({
  pseudo: state.user.pseudo,
  password: state.user.password,
  isLogged: state.user.isLogged
});

const mapDispatchToProps = dispatch => ({
  fieldChange: (name, value) => {
    const action = fieldChange(name, value);
    dispatch(action);
  },
  onLogin: value => {
    const logged = true;
    dispatch(onLogin(value, logged));
  },
  refreshHeader: () => {
    const action = refreshHeader();
    dispatch(action);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
